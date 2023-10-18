use starknet::ContractAddress;
use cc_starknet::Dungeons::{EntityData, Pack, DungeonSerde};

#[starknet::interface]
trait ICryptsAndCaverns<TState> {
    fn owner_of(self: @TState, token_id: u256) -> ContractAddress;

    fn get_svg(self: @TState, token_id: u128) -> Array<felt252>;

    fn generate_dungeon(self: @TState, token_id: u128) -> DungeonSerde;

    fn get_seed(self: @TState, token_id: u128) -> u256;

    fn mint(ref self: TState) -> u128;
}

