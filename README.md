# Live version: https://peter.website/web-sploosh-kaboom/
### Alternate version: https://amphitryon0.github.io/web-sploosh-kaboom/
The alternate version contains a few new features, but it has known issues that
prevent these features from being merged here for the time being.

# Sploosh Kaboom FAQ

- [What is Sploosh Kaboom?](#what-is-sploosh-kaboom)
  - [Why is Sploosh Kaboom Required for Hundo?](#why-is-sploosh-kaboom-required-for-the-wind-waker-100)
- [How does this tool work?](#how-does-this-tool-work)
- [How do I use this tool?](#how-do-i-use-this-tool)
- [Running and Building](#running-and-building)
- [Feedback](#feedback)
- [Credits](#temporary-credit-page)

## What is Sploosh Kaboom?

Sploosh Kaboom is a minigame in The Legend of Zelda: The Wind Waker similar to the classic board game Battleship.
In it, the player is presented with an empty board within which three squid groups of varying length are hidden.
The player can fire at a chosen grid location, which will then show whether a squid was hit there.
A group is eliminated when all of its squids are hit.
The object of the game is to eliminate all three groups within 24 shots.

### Why is Sploosh Kaboom Required for The Wind Waker 100%?

The Wind Waker 100% rules require collecting, among other things, all Pieces of Heart and Treasure Charts.
Sploosh Kaboom grants a Piece of Heart on Link's first win and a Treasure Chart on his second.
If Link wins in under 20 shots, he receives another Treasure Chart.
Because these items are required for 100%, a 100% speedrun of The Wind Waker must beat the Sploosh Kaboom minigame twice and win in under 20 shots at least once.

## How does this tool work?

See [the separate explanation](./docs/solving.md).

## How do I use this tool?

See [the separate instructions page](./docs/instructions.md).

## Running and Building

To run or build the tool locally, you will need [Node.js and npm](https://nodejs.org/en/download/).
Once you have it installed, run `npm install` within the project's source directory.

To use the local development server, run `npm start`.
To create a production build, run `npm run build`.
To automatically create a production build, commit it to the end of a branch called `gh-pages`, and push to a remote called `origin`, run `npm run deploy`.

## Feedback

Want to suggest feedback? Log an issue under the "Issues" tab. 

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
