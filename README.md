> This example is not a complete or fully functional implementation of the game. Instead, it is a basic demonstration that illustrates how to integrate C&C (Crypts And Caverns) into the game world.

# crypts and caverns example
A simple game example

Requires Dojo to implement player movement

interface
```
#[starknet::interface]
trait ICryptsAndCaverns<TState> {

    fn owner_of(self: @TState, token_id: u256) -> ContractAddress;

    fn get_svg(self: @TState, token_id: u128) -> Array<felt252>;

    fn generate_dungeon(self: @TState, token_id: u128) -> DungeonSerde;

    fn get_seed(self: @TState, token_id: u128) -> u256;

    fn mint(ref self: TState) -> u128;
}
```

### Components:
- Player
- Map
  
### Systems:
- Movement
  
### Split into several stages:

- Parsing CC map data using Cairo, which can depend on the CC library
- Implementing new map generation based on the CC library, without using the mint form
- Allowing the player to move on the map and interact with local katana
- Implementing points of interest and teleportation points

## how to build
scarb build
