
#[system]
mod CryptsAndCaverns {
    use starknet::ContractAddress;

    fn execute(ctx: Context, cc_contract_address: ContractAddress) {
         let (token_id) = ICryptsAndCaverns.mint(
                contract_address=cc_contract_address
         );
    }

}