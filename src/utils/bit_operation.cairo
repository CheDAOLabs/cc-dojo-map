use core::traits::{Into, TryInto};
use super::pow::get_pow;

// use debug::PrintTrait;

#[generate_trait]
impl BitOperation of BitOperationTrait {
    fn left_shift(mut self: u256, mut count: u128) -> u256 {
        let (result, overflow) = integer::u256_overflow_mul(self, get_pow(count));
        result
    }

    fn right_shift(mut self: u256, mut count: u128) -> u256 {
        loop {
            if count == 0 || self == 0 {
                break;
            }
            self /= 2;
            count -= 1;
        };
        self
    }
}


// Libfunc print is not allowed in the libfuncs list

// #[test]
// #[ignore]
// #[available_gas(3000000000000)]
// fn test1() {
//     let i: u256 = 104616311173140485099082100255315365365044651156030064548209934585479422322683;
//     let mut count = 0;
//     loop {
//         if count > 1000 {
//             break;
//         }
//         (i.left_shift(count)).print();
//         count += 1;
//     }
// }

#[test]
#[available_gas(300000000000000000)]
fn test() {
    let mut a: u256 = 1;
    let mut b: u128 = 32;
    let mut result: u256 = a.left_shift(b);
    assert(result == 4294967296, 'left shift over');

    a = 10790968445514836887420556568130333820280245786666631176819668653671936254856;
    b = 10;
    result = a.left_shift(b);
    assert(result == 49703210662154407479406349940110585906323142310776741314870220608315409178624,'left shift error');

    let c: u256 = 128;
    let d: u128 = 3;
    result = c.right_shift(d);
    assert(result == 16, 'right shift over');

    let n = 104616311173140485099082100255315365365044651156030064548209934585479422322683;
    let rr = n.right_shift(10);
    let gg = n / 1024;

    assert(rr == gg, 'sss');
}

