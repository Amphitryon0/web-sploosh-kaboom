# Solving Sploosh Kaboom

Sploosh Kaboom is a largely luck-based game.
If we list all the possible board layouts, we arrive at 604,584 configurations.
In The Wind Waker, the positions and orientations of the squids are determined randomly for each play of the game, and every combination is possible.
How, then, can we consistently complete this minigame in a time-sensitive context like a speedrun?

## Examining the Statistics

Sploosh Kaboom play can be optimized by examining the probabilities of squid positioning on the board.
By generating every possible configuration, we can perform mostly optimal play by use of a simple algorithm:

1. Initialize a working board set with all 604,584 possible boards.
2. Determine the probability each board space contains a squid by checking what fraction of the working board set has a squid in that space.
3. Fire upon whatever unchecked space has the highest probability of containing a squid.
4. Based on the current game state (hits, misses, unchecked spaces, and eliminated group count), determine what subset of the working board set is consistent with the game state.
This subset is the new working board set.
5. Repeat from step 2 until the game is complete.

This algorithm makes the most likely choice at each step of the game, which will not necessarily result in the best moves overall.
However, it is known from analysis of Battleship that this type of algorithm is close to optimal.
One possible refinement is developing an opening pattern to more quickly find a squid and eliminate board possibilities.

## Examining the Code

In order to exactly understand Sploosh Kaboom, it is necessary to examine the code used to generate boards.
This code can be obtained by reverse engineering The Wind Waker's game binary.
We can determine the location of this code by examining memory during gameplay, accomplished using the Dolphin emulator and a memory monitoring tool called Dolphin Memory Engine.
Once the location of the code is determined, it can be reverse engineered from PowerPC machine code into a C approximation using Ghidra.
Both the board generation algorithm and the pseudorandom number generator were reverse engineered in this way.
Pseudocode of the findings is as follows:

### Board Generation Algorithm

```c
board = [8×8 integer grid]                // board[i][j] means the value at col i, row j

function generate():                      // generate a board layout
    // empty the board
    for x from 0 to 8:
        for y from 0 to 8:
            board[x][y] = 0

    // place the squids
    place(2)
    place(3)
    place(4)

function place(length):                   // place a single squid group on the board
    // generate squid groups until one fits
    // rng() gives a uniform decimal 0 ≤ x < 1 and increments the rng state
    infinite loop:
        orientation = floor(rng() * 1000) % 2 // vert. or horiz., 0 or 1, equally likely
        x = floor(rng() * 8)              // starting col, 0–7, equally likely
        y = floor(rng() * 8)              // starting row, 0–7, equally likely
        if fits(x, y, length, orientation):
            exit loop                     // we've now determined x, y, and orientation

    // record info in board
    if orientation == 0:
        for j from 0 to length:           // for each squid
            board[x][y+j] = length        // indicate space is occupied
    else:
        for i from 0 to length:
            board[x+i][y] = length

function fits(x, y, length, orientation): // would the squids fit?
    if orientation == 0:
        for j from 0 to length:           // for each squid
            if x > 7 or y+j > 7:          // is it out of bounds?
                return False
            if board[x][y+j] != 0:        // is there already a squid there?
                return False
        return True                       // we've checked every squid by now
    else:
        for i from 0 to length:
            if x+i > 7 or y > 7:
                return False
            if board[x+i][y] != 0:
                return False
        return True
```

There are a few simplifications made compared to [the full code](https://pastebin.com/010PBgnm), namely the removal of some bookkeeping operations and unused functionality to place fewer squid groups on the board.

### RNG Algorithm

The Wind Waker makes use of the Wichmann-Hill PRNG, presented in pseudocode as follows:

``` C
double rng() {
    static int s1 = 100, s2 = 100, s3 = 100;

    s1 = (171 * s1) % 30269;
    s2 = (172 * s2) % 30307;
    s3 = (170 * s3) % 30323;

    return fmod(s1/30269.0 + s2/30307.0 + s3/30323.0, 1.0);
}
```

This generator makes use of three linear congruential generators that are combined to produce a distribution between zero and one.
The values of `(s1, s2, s3)` at any given time determine what the next value of the random number generator will be.
We can call this the "state" of the random number generator.
This state is initialized at game startup to `(100, 100, 100)`, a fixed initial seed.
Each call to the RNG will modify the state and generate a new random return value.
The first few steps of this process can be seen below:

|    s1 |    s2 |    s3 |       return value |
| ----: | ----: | ----: | -----------------: |
|   100 |   100 |   100 | 0.6930906199656834 |
| 17100 | 17200 | 17000 | 0.5253911237999249 |
| 18276 | 18621 |  9315 | 0.1491021216452075 |
|  7489 | 20577 |  6754 | 0.9526796411193339 |
|  9321 | 23632 | 26229 | 0.8229855100670485 |
| 19903 |  3566 |  1449 | 0.8003992983171554 |
|   ... |   ... |   ... |                ... |

## Solving the Game

Due to the fixed RNG seed used at game startup, we can determine every random number the game will generate.
Since we also know the exact algorithm used to generate a Sploosh Kaboom board, we can further determine what board a given starting RNG state will create.
By considering the fixed succession of RNG states as items in a sequence, we can map each state to the board layout it produces, giving a sequence of board layouts.
The RNG call rate varies greatly throughout the game, but it tends to be called on the order of 10 million times by the time a speedrunner makes it to Sploosh Kaboom.
This is easily few enough that we can precompute the board layout sequence, removing the RNG and board generation algorithms from consideration at runtime entirely.

If the runner then completes a single game, we search in the board layout sequence for the board that was encountered.
This gives us a set of possible sequence indices.
We know approximately how many times the RNG algorithm is called between games, so we add this value to each index to get a set of estimated indices for the second board.
We initialize a working board set with only those boards that appear near the estimated board sequence indices, typically on the order of 1,000.

We can use this as the initial working board set for the algorithm described [above](#examining-the-statistics), greatly increasing the accuracy of our predictions.
After each subsequent game is completed, the set of possible RNG indices can be further narrowed based on which indices are consistent with all known boards.

## Worked Example

Say a runner arrives at Sploosh Kaboom approximately 60 minutes after starting the game.

1. The runner estimates that RNG has been called about 10,000,000 times, with a standard deviation of 100,000.

2. The runner plays one game and enters the squid locations observed at the end of the game into the program.

3. The program searches within the constraints of the runner's RNG estimate and finds this board occurs at indices 9,979,965, 9,979,968, 9,993,704, 10,026,312, and 10,321,827.
It assigns these indices relative probabilities of 24.94%, 24.94%, 25.40%, 24.58%, and 0.14%.

4. Estimating that 7,000 RNG calls happened between generating the first board and the second, the program considers the range between 6,000 and 8,000 steps after each of the indices it found.

5. Each board in each range is given a probability according to a normal distribution.
Then, the probabilities for each range's boards are multiplied by the probability that that is the correct range, i.e., the probabilities determined in step 3.

6. The program determines a probability map for the game board by adding the final probabilities of all the boards to all the squares in which they contain squids.
This probability map is normalized by dividing the probability of each square by the sum of all the boards' probabilities.

7. Every time the runner makes a shot, step 6 is repeated, but only considering those boards that are consistent with the current game state.

8. The runner finishes the second board.

9. The program determines that the first board must have been at index 9,979,965 or 9,979,968, with the second board in either case being at 9,986,764.

10. The third game proceeds similarly to the second, except that there are fewer ranges, meaning that the exact board can be determined sooner.
