use starknet::ContractAddress;

#[derive(Copy, Drop, Serde)]
struct EntityData {
    x: Span<u8>,
    y: Span<u8>,
    entity_data: Span<u8>
}

#[derive(Copy, Drop, Serde)]
struct Pack {
    first: felt252,
    second: felt252,
    third: felt252
}
#[derive(Copy, Drop, Serde)]
struct DungeonSerde {
    size: u8,
    environment: u8,
    structure: u8,
    legendary: u8,
    layout: Pack,
    entities: EntityData,
    affinity: felt252,
    dungeon_name: Span<felt252>
}
#[starknet::interface]
trait ICryptsAndCaverns<TState> {

    fn owner_of(self: @TState, token_id: u256) -> ContractAddress;

    fn get_svg(self: @TState, token_id: u128) -> Array<felt252>;

    fn generate_dungeon(self: @TState, token_id: u128) -> DungeonSerde;

    fn get_seed(self: @TState, token_id: u128) -> u256;

    fn mint(ref self: TState) -> u128;
}