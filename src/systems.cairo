#[system]
mod spawn {
    use dojo::world::Context;

    use dojo_examples::components::Position;
    use dojo_examples::components::Moves;
    use dojo_examples::constants::OFFSET;

    #[event]
    use dojo_examples::events::{Event, Moved};


    // so we don't go negative

    fn execute(ctx: Context) {
        // cast the offset to a u32
        let offset: u32 = OFFSET.try_into().unwrap();

        set!(
            ctx.world,
            (
                Moves { player: ctx.origin, remaining: 100 },
                Position { player: ctx.origin, x: 4, y: 1 },
            )
        );

        emit!(ctx.world, Moved { player: ctx.origin, x: 4, y: 1, });

        return ();
    }
}

#[system]
mod move {
    use dojo::world::Context;

    use dojo_examples::components::Position;
    use dojo_examples::components::Moves;

    #[event]
    use dojo_examples::events::{Event, Moved};

    #[derive(Serde, Drop)]
    enum Direction {
        Left: (),
        Right: (),
        Up: (),
        Down: (),
    }

    impl DirectionIntoFelt252 of Into<Direction, felt252> {
        fn into(self: Direction) -> felt252 {
            match self {
                Direction::Left(()) => 0,
                Direction::Right(()) => 1,
                Direction::Up(()) => 2,
                Direction::Down(()) => 3,
            }
        }
    }

    fn execute(ctx: Context, direction: Direction) {
        let (mut position, mut moves) = get!(ctx.world, ctx.origin, (Position, Moves));
        moves.remaining -= 1;
        let next = next_position(position, direction);
        set!(ctx.world, (moves, next));
        emit!(ctx.world, Moved { player: ctx.origin, x: next.x, y: next.y, });
        return ();
    }

    fn next_position(mut position: Position, direction: Direction) -> Position {
        match direction {
            Direction::Left(()) => {
                position.x -= 1;
            },
            Direction::Right(()) => {
                position.x += 1;
            },
            Direction::Up(()) => {
                position.y -= 1;
            },
            Direction::Down(()) => {
                position.y += 1;
            },
        };

        position
    }
}


#[system]
mod cc {
    use dojo::world::Context;
    use dojo_examples::dungeons_generator::{get_layout,get_entities};
    use dojo_examples::utils::pack::{PackTrait, Pack};
    use dojo_examples::utils::{random::{random}, bit_operation::BitOperationTrait};

    fn get_size_in(seed: u256) -> u128 {
        random(seed.left_shift(4), 8, 25)
    }

    fn execute(ctx: Context,seed: u256) {

        let size = get_size_in(seed);
        let (layout,structure) = get_layout(seed,size);
        let (x_array, y_array, t_array) = get_entities(seed, size);
        return ();
    }
}