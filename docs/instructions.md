# Instructions for Use

You can use any of the methods in the Common Use Cases section and eventually get all the rewards.
Which method you choose will depend on your desired score and how much you want to learn about how to use the tool.
Each method builds on those before it and generally delivers better results, but each is also significantly harder to perform.

## Common Use Cases

### Simplest Possible

Load the page, and shoot in the game where it tells you.
If the shot hits, click the Hit button (or press X).
If it misses, click the Miss button (or press Z).
If you make a mistake in either the game or the tool, the tool can be updated by clicking on any erroneous square.
Clicking an empty square will make it a miss, clicking a miss will make it a hit, and clicking a hit will make it empty.
After finishing a game (either a win or loss), you can click the Reset button to clear all hits and misses on the board.

### Simple but Manually Entering Kills

The instructions for this are the same as the [Simplest Possible](#simplest-possible) method with one difference.
By manually entering kills, the potential ambiguity related to how many squids are remaining is reduced.
To start, whenever you load the page or reset the board, change the squids killed from Unknown to 0.
Play as normal afterwards, but after each kill, click the Increment Kills button (or press C).

### Turbo Blurbo Mode without Timer

This method improves the win rate greatly through knowledge of the sequence of possible generated boards, any previous boards you encountered, and the approximate amount of RNG calls that occur between each board.
To use this mode, click the Initialize Turbo Blurbo Mode button.

This mode requires you to perform a hard reset and then go straight to Sploosh Kaboom.
For The Wind Waker (GameCube version), this normally requires powering off the console and then starting it up again.
Pressing the reset button or quitting the game through the save menu **will not work**.
For The Wind Waker HD, either power off the console or quit from the home menu.

Once the game is started up, go immediately to the Sploosh Kaboom room.
Use of the tool is mostly [as before](#simple-but-manually-entering-kills) but with a few differences.
Manually entering kills is required, but as Unknown is no longer an option, you do not need to manually set it to 0.
After finishing a board, do not reset the prediction board.
Rather, once it is fully narrowed down (0% or 100% on all remaining spots), click the Move to History button (or press Space).
You should attempt to finish each board relatively quickly.
The longer you take, the less accurate the prediction will be, since there is no timer.

Warning: there is a small chance that, after finishing a game, the board will not be moved to history but will rather stay in the prediction board.
If this happens, you must enter it in the next available history board manually, using the procedure described in the next paragraph, and then reset the prediction board.

Note for speedrunners: the win rate is much higher after the first game, so it will often be faster to throw the first game to enter it in, and then only try to win the following games.
If you do this, it will generally be more convenient to enter the board directly into the history rather than using the prediction board (though both methods will work).
To enter a board directly in the history, click the beginning and end of each squid.
To correct a mistaken placement, simply click on the correct beginning and end squares.

### Turbo Blurbo Mode with Timer

Using the timer improves the win rate greatly by reducing the number of potential boards that must be considered.
There are a few differences compared to [not using the timer](#turbo-blurbo-mode-without-timer).
First of all, with the default settings, the three rupees in the room **must not be collected**.
If they are, the tool will not work.

To enable the timer, after initializing Turbo Blurbo Mode, click the Timer mode checkbox.
When you enter the room, click the Start Timer button (or press Space) at the same time as you press A to open the door.
Once in the room, you must spend as little time as possible talking to Salvatore or otherwise not playing a game.
However, you can spend quite some time actually playing the game—generally at least a couple minutes.

Note: some browsers will activate a focused checkbox or button when you press Space, even when told not to.
If you use such a browser and want to use the keyboard shortcut, you must click somewhere else on the page between enabling Timer mode and starting the timer.

After each game, time clicking the Split Timer button (or pressing Space) with pressing A to end the game.
Then, adjust the number of rewards by pressing Comma or Shift+Comma.
(Entering rewards can technically be skipped if you are only going to play one more game.)

Note: you always have to split the timer when you finish a game, even if you enter it directly in the history.

### Turbo Blurbo Mode without Reset

By adjusting the settings in Turbo Blurbo Mode, you can get the same accuracy without resetting the game.
Note: this is solely intended for speedruns where resetting loses time.
In particular, it does not provide better results than when resetting.

Using the tool this way is exactly the same as with a reset, except that instead of resetting right before playing Sploosh Kaboom, you reset right before starting your run.
To be able to do this, you change the values of the First board mean and First board stddev settings.
What they should be set to depends on the specific route you use and, to an extent, where you lose time within that route.
Thus, you should either ask someone familiar with the route you are using or go through the process to calculate them.

To calculate the first board mean, you will generally want to search within the first 25,000,000 boards.
To enable this, instead of clicking Initialize Turbo Blurbo Mode, click Initialize Turbo Blurbo Mode (big table).

Reset the game, and then follow the route up to Sploosh Kaboom.
Assuming you have no idea what the value should be, throw three games, and enter them all in.
Then, click the Find Match Indices button.
There may be multiple potential matches, but it should be pretty easy to tell what ones could be correct.
For example, if you entered the boards quickly, the differences between successive boards should be pretty low (i.e., around 5,000–10,000).

Note: there is a quirk where boards separated by three RNG calls may be identical.
For checking the first board mean, you can treat these as all being the same.

Assuming you didn't make many major mistakes in the route, the index of the first board will be pretty close to what you can expect in future runs.
To use it as the first board mean, simply divide by 1,000.
(Make sure not to use commas in the setting value.)
If the value is above 5,000,000 (or close), you will need to use the big table in future runs.
Otherwise, it is not necessary.

Your next run should have a very large First board stddev.
If you keep track of your first board values, you can get this much lower by calculating the actual mean and standard deviation.
You can reduce it even further if, during the run, you notice where you lose time and adjust the first board mean accordingly.
