// ------------------------------------ random --------------------------------------

fn random(seed: u256, min: u128, max: u128) -> u128 {
    let output: u256 = keccak::keccak_u256s_be_inputs(array![seed].span());

    let result = (u256 {
        low: integer::u128_byte_reverse(output.high), // just comment here to
        high: integer::u128_byte_reverse(output.low) //  avoid stupid format
    }) % (max.into() - min.into());

    // we don't need output that needs u256 range
    // u256 is thirsty for gas
    min + result.try_into().expect('over u256 range')
}

#[test]
// #[ignore]
#[available_gas(30000000)]
fn test() {
    let seed: u256 = 47644144660693649943980215435560498623172148321825190670936003990961659435532;
    let min: u128 = 1;
    let max: u128 = 15;
    let result = random(seed, min, max);
    assert(result == 9, 'random');
}

