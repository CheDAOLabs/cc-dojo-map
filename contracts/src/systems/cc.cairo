use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

#[starknet::interface]
trait ITest<TContractState> {
    fn mint(ref self: TContractState);
    fn generate(self: @TContractState, token_id: u256);
    fn seed(self: @TContractState, token_id: u256);
}

#[dojo::contract]
mod cc {
    use cc_starknet::{Dungeons, utils::pack::Pack};
    use Dungeons::{DungeonDojo, Name};
    use super::ITest;
    use starknet::{get_caller_address};


    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Mint: Mint,
        TokenName: TokenName
    }

    #[derive(Drop, starknet::Event)]
    struct Mint {
        #[key]
        TokenId: u256
    }

    #[derive(Drop, starknet::Event)]
    struct TokenName {
        #[key]
        name: felt252
    }

    // #[derive(Drop, Starknet::Event)]
    // struct DDDDD {
    //     size: u8,
    //     environment: u8,
    //     structure: u8,
    //     legendary: u8,
    //     layout: Pack,
    //     doors: Pack,
    //     points: Pack,
    //     affinity: felt252,
    //     dungeon_name: Name
    // }

    #[constructor]
    fn constructor(ref self: ContractState) {
        let mut state = Dungeons::unsafe_new_contract_state();
        Dungeons::constructor(ref state);
    }

    #[external(v0)]
    impl TestImpl of ITest<ContractState> {
        fn mint(ref self: ContractState) {
            let world = self.world_dispatcher.read();

            let mut state = Dungeons::unsafe_new_contract_state();

            let name = Dungeons::ERC721MetadataImpl::name(@state);
            emit!(world, TokenName { name });

            Dungeons::mint(ref state);
            let token_id = Dungeons::ERC721Enumerable::token_of_owner_by_index(
                @state, get_caller_address(), 1
            );
            emit!(world, Mint { TokenId: token_id });

            let dungeon = Dungeons::generate_dungeon_dojo(@state, token_id);
            emit!(world,)
        }


        fn generate(self: @ContractState, token_id: u256) {
            let world = self.world_dispatcher.read();
            let mut state = Dungeons::unsafe_new_contract_state();
            let dungeon = Dungeons::generate_dungeon_dojo(@state, token_id);
        }
    }
}

