use nullable::{NullableTrait, FromNullableResult, nullable_from_box, match_nullable};
use super::bit_operation::BitOperationTrait;

// ------------------------------------------- MapTrait -------------------------------------------

#[generate_trait]
impl MapImpl of MapTrait {
    fn select(ref self: Felt252Dict<Nullable<u256>>, key: u256) -> u256 {
        // implement the zero_default may be good too
        match match_nullable(self.get(key.try_into().expect('invalid key'))) {
            FromNullableResult::Null(()) => {
                self.update(key, 0);
                0
            },
            FromNullableResult::NotNull(val) => val.unbox()
        }
    }

    fn update(ref self: Felt252Dict<Nullable<u256>>, key: u256, value: u256) {
        self.insert(key.try_into().expect('invalid key'), nullable_from_box(BoxTrait::new(value)));
    }

    fn set_bit(ref self: Felt252Dict<Nullable<u256>>, position: u256) {
        let quotient = position / 256;
        let remainder = position % 256;

        self.update(quotient, (self.select(quotient)) | (1.left_shift(255 - remainder)));
    }

    fn get_bit(ref self: Felt252Dict<Nullable<u256>>, position: u256) -> u256 {
        let quotient = position / 256;
        let remainder = position % 256;

        self.select(quotient).right_shift(255 - remainder) & 1
    }

    fn add_bit(
        ref self: Felt252Dict<Nullable<u256>>, ref other: Felt252Dict<Nullable<u256>>, length: u256
    ) {
        let mut limit: u256 = length;
        loop {
            if limit == 0 {
                break;
            }
            let key = limit - 1;
            self.update(key, (self.select(key) | (other.select(key))));
            limit -= 1;
        }
    }

    fn subtract_bit(
        ref self: Felt252Dict<Nullable<u256>>, ref other: Felt252Dict<Nullable<u256>>, length: u256
    ) {
        let mut limit: u256 = length;
        loop {
            if limit == 0 {
                break;
            }
            let key = limit - 1;
            self.update(key, (self.select(key) & ~(other.select(key))));
            limit -= 1;
        }
    }

    fn count_bit(ref self: Felt252Dict<Nullable<u256>>, length: u256) -> u256 {
        let mut length = length;
        let mut result = 0;
        loop {
            if length == 0 {
                break;
            }
            let key = length - 1;
            let mut value: u256 = self.select(key);
            loop {
                if value == 0 {
                    break;
                }
                value = value & (value - 1);
                result += 1;
            };
            length -= 1;
        };
        result
    }
}
