use once_cell::sync::OnceCell;
use wasm_bindgen::prelude::*;

struct PossibleBoard {
    squids: u64,
    squid2: u64,
    squid3: u64,
    squid4: u64,
    probability: f64,
}

impl PossibleBoard {
    fn check_compatible(&self, hit_mask: u64, miss_mask: u64, squids_gotten: i32) -> bool {
        if (hit_mask & !self.squids) != 0 {
            return false;
        }
        if (miss_mask & self.squids) != 0 {
            return false;
        }
        if squids_gotten == -1 {
            return true;
        }
        let mut squids_hit = 0;
        squids_hit += ((self.squid2 & !hit_mask) == 0) as i32;
        squids_hit += ((self.squid3 & !hit_mask) == 0) as i32;
        squids_hit += ((self.squid4 & !hit_mask) == 0) as i32;
        squids_hit == squids_gotten
    }
}

struct SquidStartingDesc {
    x: u64,
    y: u64,
    direction: bool,
}

impl SquidStartingDesc {
    fn board_mask(&self, taken_so_far: u64, length: u64) -> Option<u64> {
        let (changing_value, shift) = match self.direction {
            true => (self.x, 1),
            false => (self.y, 8),
        };
        if changing_value + length > 8 {
            return None;
        }
        let first_bit = 1 << (self.x + 8 * self.y);
        let squid_bits = (0..length).map(|x| first_bit << (x * shift))
                                    .reduce(|a, bit| a | bit).unwrap();
        if (taken_so_far & squid_bits) != 0 {
            return None;
        }
        Some(squid_bits)
    }
}

fn get_compatible_masks(
    starting_descs: &[SquidStartingDesc; 128],
    taken_so_far: u64,
    length: u64,
) -> Vec<u64> {
    starting_descs
        .iter()
        .filter_map(|desc| desc.board_mask(taken_so_far, length))
        .collect()
}

fn make_mask(bits: &[u8]) -> u64 {
    let mut result = 0;
    for &bit_index in bits {
        result |= 1 << bit_index;
    }
    result
}

pub struct PossibleBoards {
    boards: Vec<PossibleBoard>,
}

impl PossibleBoards {
    pub fn new() -> Self {
        let starting_descs: [_; 128] = array_init::from_iter((0..8).flat_map(|y| {
            (0..8).flat_map(move |x| {
                [false, true]
                    .iter()
                    .map(move |&direction| SquidStartingDesc { x, y, direction })
            })
        }))
        .unwrap();

        let mut possible_boards = Vec::with_capacity(604584);

        // Due to the board sampling method, there is a bias towards certain boards.
        // We need to store these biases to provide accurate guesses.
        let compatible_masks = get_compatible_masks(&starting_descs, 0u64, 2);
        let combinations = compatible_masks.len();

        for mask_2 in compatible_masks {
            let compatible_masks = get_compatible_masks(&starting_descs, mask_2, 3);
            let combinations = combinations * compatible_masks.len();

            for mask_3 in compatible_masks {
                let mask_23 = mask_2 | mask_3;
                let compatible_masks = get_compatible_masks(&starting_descs, mask_23, 4);
                let combinations = combinations * compatible_masks.len();

                for mask_4 in compatible_masks {
                    possible_boards.push(PossibleBoard {
                        squids: mask_23 | mask_4,
                        squid2: mask_2,
                        squid3: mask_3,
                        squid4: mask_4,
                        probability: 1.0 / combinations as f64,
                    });
                }
            }
        }

        assert_eq!(possible_boards.len(), 604584);

        Self {
            boards: possible_boards,
        }
    }

    pub fn do_computation(
        &self,
        hits: &[u8],
        misses: &[u8],
        squids_gotten: i32,
        board_priors: &[f64],
    ) -> Option<([f64; 64], f64)> {
        let hit_mask = make_mask(hits);
        let miss_mask = make_mask(misses);

        let mut total_probability = 0.0;
        let mut probabilities = [0.0; 64];

        for (i, pb) in (&self.boards).iter().enumerate() {
            if pb.check_compatible(hit_mask, miss_mask, squids_gotten) {
                let board_prob = 1e-20 * pb.probability + board_priors[i];
                for bit_index in 0..64 {
                    if (pb.squids & (1 << bit_index)) != 0 {
                        probabilities[bit_index] += board_prob;
                    }
                }
                total_probability += board_prob;
            }
        }

        if total_probability == 0.0 {
            return None;
        }

        // Renormalize the distribution.
        for i in 0..64 {
            probabilities[i] /= total_probability;
        }

        Some((probabilities, total_probability))
    }

    pub fn compute_board_priors(
        &self,
        board_table: &[u32],
        observed_boards: &[u32],
        prior_steps_from_previous_means: &[u32],
        prior_steps_from_previous_stddevs: &[f64],
    ) -> Vec<f64> {
        // We must compute the boards and their corresponding probabilities from our observations.
        let mut board_priors = vec![0.0; 604584];
        fn gaussian_pdf(x: f64, sigma: f64) -> f64 {
            let z = x / sigma;
            (z * z / -2.0).exp()
        }
        fn scan_from(
            depth: usize, starting_index: usize, prob: f64,
            mut board_priors: &mut Vec<f64>, board_table: &[u32],
            observed_boards: &[u32],
            prior_steps_from_previous_means: &[u32],
            prior_steps_from_previous_stddevs: &[f64],
        ) {
            let mu: i64 = prior_steps_from_previous_means[depth] as i64;
            let sigma: f64 = prior_steps_from_previous_stddevs[depth];
            let scan_limit: i64 = (5.0 * sigma) as i64;
            let mean_index: i64 = starting_index as i64 + mu;
            let lower_limit: usize = std::cmp::max(starting_index as i64 + 1, mean_index - scan_limit) as usize;
            let upper_limit: usize = std::cmp::min(board_table.len() as i64, mean_index + scan_limit) as usize;
            if depth == observed_boards.len() {
                // Fill in our final smeared prior.
                for i in lower_limit..upper_limit {
                    let offset = i as i64 - (starting_index as i64 + mu);
                    board_priors[board_table[i] as usize] += prob * gaussian_pdf(offset as f64, sigma);
                }
            } else {
                for i in lower_limit..upper_limit {
                    if board_table[i] == observed_boards[depth] {
                        // Compute the normal prior, but ignore normalization, because that's handled at the end by do_computation anyway.
                        let offset = i as i64 - (starting_index as i64 + mu);
                        let adjustment = gaussian_pdf(offset as f64, sigma);
                        scan_from(
                            depth + 1, i, prob * adjustment,
                            &mut board_priors, &board_table,
                            &observed_boards,
                            &prior_steps_from_previous_means,
                            &prior_steps_from_previous_stddevs,
                        );
                    }
                }
            }
        }
        scan_from(
            0, 0, 1.0,
            &mut board_priors, &board_table,
            &observed_boards,
            &prior_steps_from_previous_means,
            &prior_steps_from_previous_stddevs,
        );
        board_priors
    }

    pub fn do_computation_from_game_history(
        &self,
        board_table: &[u32],
        hits: &[u8],
        misses: &[u8],
        squids_gotten: i32,
        observed_boards: &[u32],
        prior_steps_from_previous_means: &[u32],
        prior_steps_from_previous_stddevs: &[f64],
    ) -> Option<([f64; 64], f64)> {
        let board_priors: Vec<f64> = self.compute_board_priors(
            board_table,
            observed_boards,
            prior_steps_from_previous_means,
            prior_steps_from_previous_stddevs,
        );
        self.do_computation(hits, misses, squids_gotten, &board_priors)
    }

    pub fn disambiguate_final_board(
        &self,
        board_table: &[u32],
        hits: &[u8],
        observed_boards: &[u32],
        prior_steps_from_previous_means: &[u32],
        prior_steps_from_previous_stddevs: &[f64],
    ) -> Option<u32> {
        let mut board_priors: Vec<f64> = self.compute_board_priors(
            board_table,
            observed_boards,
            prior_steps_from_previous_means,
            prior_steps_from_previous_stddevs,
        );

        let hit_mask = make_mask(hits);
        for (i, pb) in (&self.boards).iter().enumerate() {
            if ! pb.check_compatible(hit_mask, 0, 3) {
                board_priors[i] = 0.0;
            }
        }

        // Normalize the prior.
        let mut total = 1e-20;
        for p in &board_priors {
            total += *p;
        }
        for p in &mut board_priors {
            *p /= total;
        }

        for (i, p) in board_priors.iter().enumerate() {
            if *p > 0.9 {
                return Some(i as u32);
            }
        }

        None
    }
}

static POSSIBLE_BOARDS: OnceCell<PossibleBoards> = OnceCell::new();
static BOARD_TABLE: OnceCell<Vec<u32>> = OnceCell::new();

// Calculates the probabilities for each cell based on the hits, misses and the
// squids that have already been killed.
#[wasm_bindgen]
pub fn calculate_probabilities_without_sequence(
    hits: &[u8],
    misses: &[u8],
    squids_gotten: i32,
) -> Option<Vec<f64>> {
    let board_priors = vec![0.0; 604584];
    let (probabilities, total_probability) = POSSIBLE_BOARDS
        .get_or_init(PossibleBoards::new)
        .do_computation(hits, misses, squids_gotten, &board_priors)?;

    let mut values = probabilities.iter().copied().collect::<Vec<_>>();

    // We sneak in the total probability at the end.
    values.push(total_probability * 1e20);

    Some(values)
}

#[wasm_bindgen]
pub fn calculate_probabilities_from_game_history(
    hits: &[u8],
    misses: &[u8],
    squids_gotten: i32,
    observed_boards: &[u32],
    prior_steps_from_previous_means: &[u32],
    prior_steps_from_previous_stddevs: &[f64],
) -> Option<Vec<f64>> {
    let fake_board_table = vec!{};
    let board_table = match BOARD_TABLE.get() {
        Some(v) => v,
        None => &fake_board_table,
    };

    let (probabilities, total_probability) = POSSIBLE_BOARDS
        .get_or_init(PossibleBoards::new)
        .do_computation_from_game_history(
            board_table,
            hits,
            misses,
            squids_gotten,
            observed_boards,
            prior_steps_from_previous_means,
            prior_steps_from_previous_stddevs,
        )?;

    let mut values = probabilities.iter().copied().collect::<Vec<_>>();

    // We sneak in the total probability at the end.
    values.push(total_probability);

    Some(values)
}

#[wasm_bindgen]
pub fn disambiguate_final_board(
    hits: &[u8],
    observed_boards: &[u32],
    prior_steps_from_previous_means: &[u32],
    prior_steps_from_previous_stddevs: &[f64],
) -> Option<u32> {
    let fake_board_table = vec!{};
    let board_table = match BOARD_TABLE.get() {
        Some(v) => v,
        None => &fake_board_table,
    };

    POSSIBLE_BOARDS
        .get_or_init(PossibleBoards::new)
        .disambiguate_final_board(
            board_table,
            hits,
            observed_boards,
            prior_steps_from_previous_means,
            prior_steps_from_previous_stddevs,
        )
}

#[wasm_bindgen]
pub fn set_board_table(board_table: &[u32]) {
    BOARD_TABLE.set(board_table.iter().copied().collect::<Vec<_>>()).unwrap();
}

#[cfg(test)]
mod tests {
    use crate::PossibleBoards;

    #[test]
    fn test() {
        PossibleBoards::new().do_computation(&[], &[], -1, &[], &[]).unwrap();
    }
}
