use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

#[starknet::interface]
trait ITest<TContractState> {
    fn mint(ref self: TContractState);
}

#[dojo::contract]
mod cc {
    use cc_starknet::Dungeons;
    use super::ITest;

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Mint: Mint,
        Name: Name
    }

    #[derive(Drop, starknet::Event)]
    struct Mint {
        TokenId: u128
    }

    #[derive(Drop, starknet::Event)]
    struct Name {
        #[key]
        name: felt252
    }

    #[external(v0)]
    impl TestImpl of ITest<ContractState> {
        fn mint(ref self: ContractState) {
            let world = self.world_dispatcher.read();
            let mut state = Dungeons::unsafe_new_contract_state();
            Dungeons::constructor(ref state);

            let name = Dungeons::ERC721MetadataImpl::name(@state);
            emit!(world, Name { name });
            
            Dungeons::mint(ref state);
            emit!(world, Mint { TokenId: 1 });
        }
    }
}
