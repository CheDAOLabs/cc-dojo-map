use starknet::ContractAddress;

#[starknet::interface]
trait ICryptsAndCaverns<TState> {
    fn owner_of(self: @TState, token_id: u256);

    fn get_svg(self: @TState, token_id: u256);

    fn generate_dungeon(self: @TState, token_id: u256);

    fn get_seed(self: @TState, token_id: u256);

    fn mint(ref self: TState);
}

