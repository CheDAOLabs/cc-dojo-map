> This example is not a complete or fully functional implementation of the game. Instead, it is a basic demonstration that illustrates how to integrate C&C (Command and Control) into the game world.

# crypts and caverns example
A simple game example
Requires Dojo to implement player movement
Components:

Player
Map
Systems:

Movement
Split into several stages:

- Parsing CC map data using Cairo, which can depend on the CC library
- Implementing new map generation based on the CC library, without using the mint form
- Allowing the player to move on the map and interact with local katana
- Implementing points of interest and teleportation points

## how to build
scarb build