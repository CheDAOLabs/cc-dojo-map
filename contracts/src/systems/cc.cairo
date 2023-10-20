use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

// ---------------------------------------- interface -------------------------------------
#[starknet::interface]
trait CCInterface<TContractState> {
    fn mint(ref self: TContractState);
    fn generate(self: @TContractState, token_id: u256);
    fn svg(self: @TContractState, token_id: u256);
}

// #[starknet::interface]
// trait IERC721Enumerable<TContractState> {
//     fn total_supply(self: @TContractState) -> u256;
//     fn token_by_index(self: @TContractState, index: u256) -> u256;
//     fn token_of_owner_by_index(self: @TContractState, owner: ContractAddress, index: u256) -> u256;
// }

// #[starknet::interface]
// trait IERC721Metadata<TState> {
//     fn name(self: @TState) -> felt252;
//     fn symbol(self: @TState) -> felt252;
//     fn token_uri(self: @TState, token_id: u256) -> Array<felt252>;
// }

// #[starknet::interface]
// trait IERC721<TState> {
//     fn balance_of(self: @TState, account: ContractAddress) -> u256;
//     fn owner_of(self: @TState, token_id: u256) -> ContractAddress;
//     fn transfer_from(ref self: TState, from: ContractAddress, to: ContractAddress, token_id: u256);
//     fn safe_transfer_from(
//         ref self: TState,
//         from: ContractAddress,
//         to: ContractAddress,
//         token_id: u256,
//         data: Span<felt252>
//     );
//     fn approve(ref self: TState, to: ContractAddress, token_id: u256);
//     fn set_approval_for_all(ref self: TState, operator: ContractAddress, approved: bool);
//     fn get_approved(self: @TState, token_id: u256) -> ContractAddress;
//     fn is_approved_for_all(
//         self: @TState, owner: ContractAddress, operator: ContractAddress
//     ) -> bool;
// }

// ---------------------------------------- contract --------------------------------------
#[dojo::contract]
mod cc {
    // events would be emitted twice
    // that should be solved when it is done
    // or change it in cc source code

    // ------------------------------------- import -------------------------------------

    use core::array::ArrayTrait;
    use cc_starknet::{Dungeons, utils::pack::Pack};
    use Dungeons::{DungeonDojo, Name};
    use super::CCInterface;
    use starknet::{get_caller_address, ContractAddress};
    use cc_dojo_map::models::cc_map::Map;

    // ------------------------------------- event -------------------------------------

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        ForTest: ForTest
    }

    #[derive(Drop, starknet::Event)]
    struct ForTest {
        #[key]
        Param: felt252
    }

    // ------------------------------------- constructor --------------------------------

    #[constructor]
    fn constructor(ref self: ContractState) {
        let mut state = Dungeons::unsafe_new_contract_state();
        Dungeons::constructor(ref state);
    }

    // ------------------------------------- implement ----------------------------------

    fn emit(ref self: ContractState, param: felt252) {
        let world = self.world_dispatcher.read();
        emit!(world, ForTest { Param: param });
    }

    fn get_world(self: @ContractState) -> IWorldDispatcher {
        self.world_dispatcher.read()
    }

    #[external(v0)]
    impl CCImpl of CCInterface<ContractState> {
        //
        fn mint(ref self: ContractState) {
            //
            let mut state = Dungeons::unsafe_new_contract_state();
            Dungeons::mint(ref state);
        //
        }

        fn generate(self: @ContractState, token_id: u256) {
            //
            let mut state = Dungeons::unsafe_new_contract_state();
            let dungeon = Dungeons::generate_dungeon_dojo(@state, token_id);

            let world = self.world_dispatcher.read();
            set!(
                world,
                Map {
                    token_id: token_id.try_into().unwrap(),
                    size: dungeon.size,
                    environment: dungeon.environment,
                    structure: dungeon.structure,
                    legendary: dungeon.legendary,
                    layout1: dungeon.layout.first,
                    layout2: dungeon.layout.second,
                    layout3: dungeon.layout.third,
                    doors1: dungeon.doors.first,
                    doors2: dungeon.doors.second,
                    doors3: dungeon.doors.third,
                    points1: dungeon.points.first,
                    points2: dungeon.points.second,
                    points3: dungeon.points.third,
                    affinity: dungeon.affinity,
                    dungeon_name1: dungeon.dungeon_name.first,
                    dungeon_name2: dungeon.dungeon_name.second,
                    dungeon_name3: dungeon.dungeon_name.third,
                    dungeon_name4: dungeon.dungeon_name.fourth,
                    dungeon_name5: dungeon.dungeon_name.fifth,
                }
            )
        //
        }

        fn svg(self: @ContractState, token_id: u256) {
            //
            let mut state = Dungeons::unsafe_new_contract_state();
            let mut svg = Dungeons::get_svg(@state, token_id);

            let world = self.world_dispatcher.read();
            loop {
                match svg.pop_front() {
                    Option::Some(part) => {
                        emit!(world, ForTest { Param: part });
                    },
                    Option::None(_) => {
                        break;
                    }
                };
            }
        //
        }
    }
}
