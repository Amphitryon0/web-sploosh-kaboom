# Live version: https://peter.website/web-sploosh-kaboom/

# Sploosh Kaboom FAQ

- [What is Sploosh Kaboom?](#what-is-sploosh-kaboom)
  - [Why is Sploosh Kaboom required for hundo?](#why-is-sploosh-kaboom-required-for-the-wind-waker-100)
- [Solving Sploosh Kaboom](#solving-sploosh-kaboom)
  - [Examining the Statistics](#examining-the-statistics)
  - [Examining the Code](#examining-the-code)
    - [Board generation Algorithm](#board-generation-algorithm)
    - [RNG Algorithm](#rng-algorithm)
  - [Solving the Game](#solving-the-game)
  - [Worked Example](#worked-example)
- [Feedback](#feedback)
- [Credits](#temporary-credit-page)

## What is Sploosh Kaboom?

Sploosh Kaboom is a minigame in The Legend of Zelda: The Wind Waker similar to
the classic board game Battleship. In it, the player is presented with an empty
board within which three squid groups of varying length are hidden. The player
can fire at a chosen grid location, which will then show whether a squid was hit
there. A group is eliminated when all of its squids are hit. The object of the
game is to eliminate all three groups within 24 shots.

### Why is Sploosh Kaboom Required for The Wind Waker 100%?

The Wind Waker 100% rules require collecting, among other things, all treasure
charts and Pieces of Heart. Sploosh Kaboom grants a Piece of Heart on Link's
first win and a treasure chart on his second. If Link wins in under 20 shots, he
receives another treasure chart. Because these items are required for 100%, a
100% speedrun of The Wind Waker must beat the Sploosh Kaboom minigame twice and
win in under 20 shots at least once.

## Solving Sploosh Kaboom

Sploosh Kaboom is a largely luck-based game. If we list all the possible board
layouts, we arrive at 604,584 valid configurations. In The Wind Waker, the
positions and orientations of the squid groups are determined randomly for each
play of the game, and every combination is possible. How, then, can we
consistently complete this minigame in a time-sensitive context like a speedrun?

### Examining the Statistics

Sploosh Kaboom play can be optimized by examining the probabilities of squid
positioning on the board. By generating every possible valid configuration, we
can perform mostly optimal play by use of a simple algorithm:

1. Initialize a working board set with all 604,584 possible boards.
2. Determine the probability each board space contains a squid by checking what
fraction of the working board set has a squid in that space.
3. Fire upon whatever unchecked space has the highest statistical odds of
containing a squid.
4. Based on the current game state (hits, misses, unchecked spaces, and
eliminated group count), determine what subset of the working board set is still
possible. This subset is the new working board set.
5. Repeat from step 2 until the game is complete.

This algorithm makes the most likely choice at each step of the game, which will
not necessarily result in the best moves overall. However, it is known from
analysis of Battleship that this type of algorithm is close to optimal. One
possible refinement is developing an opening pattern to more quickly find a
squid and eliminate board possibilities.

### Examining the Code

In order to exactly understand Sploosh Kaboom, it is necessary to examine the
code used to generate boards. We can determine where this section of code is by
examining memory during gameplay. This is done using the Dolphin emulator and a
memory monitoring tool called Dolphin Memory Engine. Once the relevant segment
of the code is determined, it can be reverse engineered from machine code into
a C approximation using PowerPC reverse engineering tools. Ghidra was used to 
approximate the C code for the Sploosh Kaboom board generation algorithm and
the Random Number Generator of The Wind Waker. Pseudocode of the findings is as
follows:

#### Board Generation Algorithm

```c
board = [8×8 integer grid]      // board[i][j] means the value at col i, row j

function generate():  // generates a board layout
    // empty the board
    for x from 0 to 8:
        for y from 0 to 8:
            board[x][y] = 0

    // place the ships
    place(0,2)  // first #0 of length 2
    place(1,3)  // then #1 of length 3
    place(2,4)  // then #2 of length 4

function place(shipNumber, shipLength):  // places a single ship on the board
    // generate ships until one fits
    // rng() gives a uniformly "random" decimal 0 ≤ x < 1, increments the rng state
    infinite loop:
        orientation = floor(rng() * 1000) % 2 // vert. or horiz., 0 or 1, equally-likely
        x = floor(rng() * 8)            // top/left squid's col, 0–7, equally-likely
        y = floor(rng() * 8)            // top/left squid's row
        if fits(x,y,shipLength,orientation):
            exit loop                   // we've now determined x, y and orientation

    // place ship
    if orientation == 0:
        for j from 0 to shipLength:             // for each squid
            board[x][y+j] = 102 + shipNumber    // put 102/103/104 in relevant tile
    else:
        for i from 0 to shipLength:
            board[x+i][y] = 102 + index

function fits(x, y, shipLength, orientation):  // would the ship fit?
    if orientation == 0:
        for j from 0 to shipLength:     // for each tile
            if x > 7 or y+j > 7:        // is it out-of-bounds?
                return False
            if board[x][y+j] > 100:     // does it already have a squid in it?
                return False
        return True                     // we've checked every tile by now
    else:
        for i from 0 to shipLength:
            if x+i > 7 or y > 7:
                return False
            if board[x+i][y] > 100:
                return False
        return True
```

There are a few simplifications made compared to
[the full code](https://pastebin.com/010PBgnm), namely the removal of some
bookkeeping operations and unused functionality to place fewer ships on the
board.

#### RNG Algorithm

The Wind Waker makes use of the Wichmann-Hill PRNG, presented in pseudocode as
follows:

``` C
double rng() {
    static int s1 = 100, s2 = 100, s3 = 100;

    s1 = (171 * s1) % 30269;
    s2 = (172 * s2) % 30307;
    s3 = (170 * s3) % 30323;

    return fmod(s1/30269.0 + s2/30307.0 + s3/30323.0, 1.0);
}
```

This generator makes use of three linear congruential generators that are then
combined to produce a distribution between zero and one. This generator is
initialized on console reboot to `s1 = s2 = s3 = 100`, a fixed initial seed.
The values of `(s1, s2, s3)` at any given time determine what the next value
of the random number generator will be. We can call this the "state" of the 
random number generator. Each iteration of the RNG will advance the seed values
and generate a new random return value. The first few steps of this process 
can be seen below:

|    s1 |    s2 |    s3 |       return value |
| ----: | ----: | ----: | -----------------: |
|   100 |   100 |   100 | 0.6930906199656834 |
| 17100 | 17200 | 17000 | 0.5253911237999249 |
| 18276 | 18621 |  9315 | 0.1491021216452075 |
|  7489 | 20577 |  6754 | 0.9526796411193339 |
|  9321 | 23632 | 26229 | 0.8229855100670485 |
| 19903 |  3566 |  1449 | 0.8003992983171554 |
|   ... |   ... |   ... |                ... |

We can then use the board generation algorithm above to generate a mapping from
RNG states to the boards they generate in the game.

### Solving the Game

Due to the fixed initial seed on console reboot, we can determine every random
number that the PRNG algorithm will generate for use by the game. Since we know
the exact algorithm used to generate a Sploosh Kaboom board configuration, we
can also determine what board configuration a given starting RNG state will
create. By considering the fixed succession of RNG states as items in a
sequence, we can map each state to the board layout it produces, giving a
sequence of board layouts. The RNG rate varies greatly throughout the game, but
it tends to be called on the order of 10 million times by the time a speedrunner
makes it to Sploosh Kaboom. This is easily few enough that we can precompute the
board layout sequence, removing the RNG algorithm from consideration at runtime
entirely.

If the runner then completes a single game, we search in the board layout
sequence for the board that was encountered. This gives us a set of possible
sequence indices. If desired for efficiency (to avoid a linear search at
runtime), we can instead precompute a reverse mapping from board layouts to
their possible sequence positions. However, this does not turn out to be
necessary.

We know approximately how many times the RNG algorithm is called between games,
so we add this value to each board sequence index. We start off by emptying the
working board set. Then, for each new index, we add the boards at that and
nearby indices to the working board set, which now typically contains only on
the order of 1,000 boards.

After each subsequent game is completed, the set of possible RNG indices can be
further narrowed based on which indices are consistent with all known boards.
Once sufficiently narrowed (though this often happens after one board), the set
of boards becomes small enough we can predict the correct board very accurately.

### Worked Example

Say a runner arrives at Sploosh Kaboom approximately 60 minutes after starting
the game.

1. The runner estimates that RNG has been called about 10,000,000 times, with a
standard deviation of 100,000.

2. The runner plays one game and enters the squid locations observed at the end
of the game into the program.

3. The program determines the board to be number 587,288 out of 604,584.

4. The program searches within the constraints of the runner's RNG estimate and
finds this board occurs at indices 9,979,965, 9,979,968, 9,993,704, 10,026,312,
and 10,321,827. It assigns these indices relative probabilities of 24.94%,
24.94%, 25.40%, 24.58%, and 0.14%.

5. Estimating that 7,000 RNG calls happened between generating the first board
and the second, the program considers the range between 6,000 and 8,000 steps
after each of the indices it found.

6. Each board in each range is given a probability according to a normal
distribution. Then, the probabilities for each range's boards are multiplied by
the probability that that is the correct range, i.e., the probabilities
determined in step 4.

7. The program determines a probability map for the game board by adding the
probability of every board in every range to all the squares in which the board
contains squids. This probability map is normalized by dividing the
probabilities of all squares by the sum of all the boards' probabilities.

8. Every time the runner makes a shot, step 7 is repeated, but only considering
those boards that are consistent with the current game state.

9. The runner finishes the second board, which the program determines is number
133,982.

10. The program determines that the first board must have been at index
9,979,965 or 9,979,968, with the second board in either case being at 9,986,764.

11. The third game proceeds similarly to the second, except that there are fewer
ranges, meaning that the exact board can be determined sooner.

## Feedback

Want to suggest feedback? Log an issue under the "Issues" tab. 

Want to discuss this tool further in depth? Join the [Linkus7 Discord](https://discord.gg/linkus7), and chat in the #sploosh-kaboom channel.

## Temporary Credit Page

This is incomplete and just a random listing of those that have contributed in the #sploosh-kaboom channel:

 - Peter Schmidt-Nielsen
 - Cryze
 - ginkgo
 - TrogWW
 - Langufo
 - csunday95
 - shoutplenty
 - the NSA for the beautiful piece of software called Ghidra
 - aldelaro for Dolphin Memory Engine
 - the inimitable Dolphin Devs
 - Linkus7 for complaining about sploosh enough to summon an army
