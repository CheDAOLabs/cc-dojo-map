//use debug::PrintTrait;
use cc_dojo_map::utils::bit_operation::BitOperationTrait;
use cc_dojo_map::utils::random::random;
// use cc_starknet::utils::map::MapTrait;
use cc_dojo_map::utils::pack::{PackTrait, Pack};

// ------------------------------------------- Structs -------------------------------------------

#[derive(Copy, Drop, serded)]
struct Settings {
    size: u128,
    seed: u256,
    length: u128,
    counter: u128
}

#[derive(Copy, Drop)]
struct RoomSettings {
    min_rooms: u128,
    max_rooms: u128,
    min_room_size: u128,
    max_room_size: u128
}

#[derive(Copy, Drop)]
struct Room {
    x: u128,
    y: u128,
    width: u128,
    height: u128
}

// cause some annoying errors
// #[derive(Copy, Drop)]
// enum Direction {
//     LEFT,
//     UP,
//     RIGHT,
//     DOWN,
// }

// ------------------------------------------- Generator -------------------------------------------

fn get_layout(seed: u256, size: u128) -> (Pack, u8) {
    let mut settings: Settings = build_settings(seed, size);
    let mut structure: u8 = 0;

    if random_shift_counter_plus(ref settings, 0, 100) > 30 {
        let (mut rooms, mut floor) = generate_rooms(ref settings);
        let mut hallways = generate_hallways(ref settings, @rooms);

        floor.add_bit(hallways);
        (floor, structure)
    } else {
        structure = 1;
        let cavern: Pack = generate_cavern(ref settings);
        (cavern, structure)
    }
}

fn generate_rooms(ref settings: Settings) -> (Array<Room>, Pack) {
    // 'generate_rooms'.print();
    let mut room_settings: RoomSettings = RoomSettings {
        min_rooms: settings.size / 3,
        max_rooms: settings.size,
        min_room_size: 2,
        max_room_size: settings.size / 3
    };

    let mut rooms: Array<Room> = ArrayTrait::new();
    let mut floor: Pack = PackTrait::new();

    let mut num_rooms = random_with_counter_plus(
        ref settings, room_settings.min_rooms, room_settings.max_rooms
    );

    let mut safety_check: u128 = 256;
    loop {
        if num_rooms == 0 {
            break;
        }

        let current: Room = generate_new_room(ref settings, @room_settings);

        if is_valid_room(@rooms, @current) {
            rooms.append(current);
            mark_the_floor(ref floor, current, settings.size);
            num_rooms -= 1;
        }

        if safety_check == 0 {
            break;
        }
        safety_check -= 1;
    };

    (rooms, floor)
}

fn explore_in_cavern(
    ref settings: Settings,
    ref cavern: Pack,
    ref last_direction: u8,
    ref next_direction: u8,
    mut x: u128,
    mut y: u128
) {
    cavern.set_bit(y * settings.size + x);

    if is_left(last_direction) {
        let new_direction = generate_direction(ref settings);
        last_direction = new_direction;
        next_direction = new_direction;
    } else {
        let direction_seed = random_shift_counter_plus(ref settings, 0, 100);
        if direction_seed <= 25 {
            next_direction = clockwise_rotation(last_direction);
        } else if direction_seed <= 50 {
            next_direction = counterclockwise_rotation(last_direction);
        } else {
            next_direction = last_direction;
        }
    }

    let (next_x, next_y) = get_direction(x, y, next_direction);
    x = next_x;
    y = next_y;

    if (x > 0 && x < settings.size && y > 0 && y < settings.size) {
        explore_in_cavern(ref settings, ref cavern, ref last_direction, ref next_direction, x, y);
    }
}

fn generate_cavern(ref settings: Settings) -> Pack {
    // 'generate_cavern'.print();
    let holes = settings.size / 2;
    let mut cavern: Pack = PackTrait::new();
    let mut last_direction: u8 = 0;
    let mut next_direction: u8 = 0;

    let mut i = 0;
    loop {
        if i == holes {
            break;
        }

        let mut x = random_shift_counter_plus(ref settings, 0, settings.size);
        let mut y = random_shift_counter_plus(ref settings, 0, settings.size);

        explore_in_cavern(ref settings, ref cavern, ref last_direction, ref next_direction, x, y);

        i += 1;
    };

    cavern
}

fn generate_hallways(ref settings: Settings, rooms: @Array<Room>) -> Pack {
    // 'generate_hallways'.print();
    let mut hallways: Pack = PackTrait::new();

    let rooms_span = rooms.span();

    if !rooms_span.is_empty() {
        let mut previous_x: u128 = *rooms_span.at(0).x + (*rooms_span.at(0).width / 2);
        let mut previous_y: u128 = *rooms_span.at(0).y + (*rooms_span.at(0).height / 2);

        let mut i = 1;
        loop {
            if i == rooms_span.len() {
                break;
            }

            let mut current_x = *rooms_span.at(i).x + (*rooms_span.at(i).width / 2);
            let mut current_y = *rooms_span.at(i).y + (*rooms_span.at(i).height / 2);
            if current_x == previous_x {
                connect_halls_vertical(
                    ref hallways, current_y, previous_y, previous_x, settings.size
                );
            } else if current_y == previous_y {
                connect_halls_horizontal(
                    ref hallways, current_x, previous_x, previous_y, settings.size
                );
            } else {
                if random_with_counter_plus(ref settings, 1, 2) == 2 {
                    connect_halls_horizontal(
                        ref hallways, current_x, previous_x, previous_y, settings.size
                    );
                    connect_halls_vertical(
                        ref hallways, previous_y, current_y, current_x, settings.size
                    );
                } else {
                    connect_halls_vertical(
                        ref hallways, current_y, previous_y, previous_x, settings.size
                    );
                    connect_halls_horizontal(
                        ref hallways, previous_x, current_x, current_y, settings.size
                    );
                }
            }

            previous_x = current_x;
            previous_y = current_y;

            i += 1;
        };
    }

    hallways
}

fn generate_points(ref settings: Settings, ref map: Pack, probability: u128) -> Pack {
    // 'generate_points'.print();
    let mut points: Pack = PackTrait::new();

    // maintain consistency with the source code
    let mut prob: u128 = random_with_counter_plus(ref settings, 0, probability);
    if (prob == 0) {
        prob = 1;
    }

    let mut counter: u128 = 0;
    let limit: u128 = settings.size * settings.size;
    loop {
        if counter == limit {
            break;
        }

        if map.get_bit(counter) && random_with_counter_plus(ref settings, 0, 100) <= prob {
            points.set_bit(counter);
        }

        counter += 1;
    };

    points
}

fn get_entities(seed: u256, size: u128) -> (Array<u8>, Array<u8>, Array<u8>) {
    let (mut points, mut doors) = generate_entities(seed, size);
    parse_entities(size, ref points, ref doors)
}

fn parse_entities(
    size: u128, ref points: Pack, ref doors: Pack
) -> (Array<u8>, Array<u8>, Array<u8>) {
    let mut x_arr: Array<u8> = ArrayTrait::new();
    let mut y_arr: Array<u8> = ArrayTrait::new();
    let mut entity_type: Array<u8> = ArrayTrait::new();

    // let mut entity_count: u256 = points.count_bit(get_length(size))
    // + doors.count_bit(get_length(size));
    let mut counter = 0;

    let mut y: u8 = 0;
    loop {
        if y.into() == size {
            break;
        }
        let mut x: u8 = 0;
        loop {
            if x.into() == size {
                break;
            }
            if doors.get_bit(counter) {
                x_arr.append(x);
                y_arr.append(y);
                entity_type.append(0);
            }
            if points.get_bit(counter) {
                x_arr.append(x);
                y_arr.append(y);
                entity_type.append(1);
            }
            counter += 1;
            x += 1;
        };
        y += 1;
    };

    (x_arr, y_arr, entity_type)
}

fn get_points(seed: u256, size: u128) -> (Pack, u128) {
    let (mut points, mut doors) = generate_entities(seed, size);
    (points, points.count_bit())
}

fn get_doors(seed: u256, size: u128) -> (Pack, u128) {
    let (mut points, mut doors) = generate_entities(seed, size);
    (doors, doors.count_bit())
}

fn generate_entities(seed: u256, size: u128) -> (Pack, Pack) {
    // 'generate_entities'.print();
    let mut settings: Settings = build_settings(seed, size);

    if random_with_counter_plus(ref settings, 0, 100) > 30 {
        let (mut rooms, mut floor) = generate_rooms(ref settings);

        let mut hallways = generate_hallways(ref settings, @rooms);

        // hallways does not take the bit which floor had mark already
        hallways.subtract_bit(floor);

        let hallways_points: Pack = if hallways.count_bit() > 0 {
            generate_points(ref settings, ref hallways, 40 / square_root(hallways.count_bit()))
        } else {
            PackTrait::new()
        };

        (
            generate_points(ref settings, ref floor, 12 / square_root(settings.size - 6)),
            hallways_points
        )
    } else {
        let mut cavern: Pack = generate_cavern(ref settings);
        let num_tiles = cavern.count_bit();

        let mut points: Pack = generate_points(
            ref settings, ref cavern, 12 / square_root(num_tiles - 6)
        );
        let mut doors: Pack = generate_points(
            ref settings, ref cavern, 40 / square_root(num_tiles)
        );

        points.subtract_bit(doors);

        (points, doors)
    }
}

fn count_entities(entities_data: Span<u8>) -> (u8, u8) {
    let mut points = 0;
    let mut doors = 0;
    let mut len = entities_data.len();
    loop {
        if len == 0 {
            break;
        }
        if *entities_data[len - 1] == 0_u8 {
            points += 1;
        } else {
            doors += 1;
        }
        len -= 1;
    };
    (points, doors)
}

fn generate_new_room(ref settings: Settings, room_settings: @RoomSettings) -> Room {
    let min_room_size = *room_settings.min_room_size;
    let max_room_size = *room_settings.max_room_size;

    let width = random_with_counter_plus(ref settings, min_room_size, max_room_size);
    let height = random_with_counter_plus(ref settings, min_room_size, max_room_size);

    let x = random_with_counter_plus(ref settings, 1, settings.size - 1 - width);
    let y = random_with_counter_plus(ref settings, 1, settings.size - 1 - height);

    Room { x: x, y: y, width: width, height: height }
}

fn is_valid_room(rooms: @Array<Room>, current: @Room) -> bool {
    let rooms_span = rooms.span();
    let mut length: u256 = rooms_span.len().into();

    if length > 0 {
        loop {
            if length == 0 {
                break true;
            }

            let room: Room = *rooms_span.at((length - 1).try_into().expect('invalid index'));
            if (room.x - 1 < *current.x + *current.width)
                && (room.x + room.width + 1 > *current.x)
                && (room.y - 1 < *current.x + *current.height)
                && (room.y + room.height > *current.y) {
                break false;
            }

            length -= 1;
        }
    } else {
        true
    }
}

fn mark_the_floor(ref floor: Pack, current: Room, size: u128) {
    let mut y = current.y;
    loop {
        if y == current.y + current.height {
            break;
        }

        let mut x = current.x;
        loop {
            if x == current.x + current.width {
                break;
            }
            floor.set_bit(y * size + x);
            x += 1;
        };
        y += 1;
    };
}

fn connect_halls_vertical(
    ref hallways: Pack, current_y: u128, previous_y: u128, x: u128, size: u128
) {
    let mut min: u128 = if current_y > previous_y {
        previous_y
    } else {
        current_y
    };
    let mut max: u128 = if current_y > previous_y {
        current_y
    } else {
        previous_y
    };
    let mut y = min;
    loop {
        if y == max {
            break;
        }
        hallways.set_bit(y * size + x);
        y += 1;
    };
}

fn connect_halls_horizontal(
    ref hallways: Pack, current_x: u128, previous_x: u128, y: u128, size: u128
) {
    let mut min: u128 = if current_x > previous_x {
        previous_x
    } else {
        current_x
    };
    let mut max: u128 = if current_x > previous_x {
        current_x
    } else {
        previous_x
    };
    let mut x = min;
    loop {
        if x == max {
            break;
        }
        hallways.set_bit(y * size + x);
        x += 1;
    }
}

fn get_direction(base_x: u128, base_y: u128, direction: u8) -> (u128, u128) {
    if direction == 0 {
        if base_x > 0 {
            (base_x - 1, base_y)
        } else {
            (base_x, base_y)
        }
    } else if direction == 1 {
        (base_x, base_y + 1)
    } else if direction == 2 {
        (base_x + 1, base_y)
    } else { // direction ==3
        if base_y > 0 {
            (base_x, base_y - 1)
        } else {
            (base_x, base_y)
        }
    }
}

#[inline(always)]
fn is_left(direction: u8) -> bool {
    if direction == 0 {
        true
    } else {
        false
    }
}

#[inline(always)]
fn clockwise_rotation(direction: u8) -> u8 {
    if direction == 3 {
        0
    } else {
        direction + 1
    }
}

#[inline(always)]
fn counterclockwise_rotation(direction: u8) -> u8 {
    if direction == 0 {
        3
    } else {
        direction - 1
    }
}

#[inline(always)]
fn generate_direction(ref settings: Settings) -> u8 {
    random_shift_counter_plus(ref settings, 1, 4).try_into().expect('over u8 range')
}

#[inline(always)]
fn random_with_counter_plus(ref settings: Settings, min: u128, max: u128) -> u128 {
    let result = random(settings.seed + settings.counter.into(), min, max);
    settings.counter += 1;
    result
}

#[inline(always)]
fn random_shift_counter_plus(ref settings: Settings, min: u128, max: u128) -> u128 {
    let result = random(settings.seed.left_shift(settings.counter), min, max);
    settings.counter += 1;
    result
}

#[inline(always)]
fn get_length(size: u128) -> u128 {
    size * size / 256 + 1
}

#[inline(always)]
fn build_settings(seed: u256, size: u128) -> Settings {
    Settings { size: size, seed: seed, length: get_length(size), counter: 0 }
}

fn square_root(origin: u128) -> u128 {
    let mut x = origin;
    let mut y = (x + 1) / 2;

    loop {
        if y >= x {
            break;
        }
        x = y;
        y = (origin / y + y) / 2;
    };

    return x;
}

// ------------------------------------------- Test -------------------------------------------

fn p<T, impl TPrint: PrintTrait<T>>(t: T) {
    t.print();
}

// Libfunc print is not allowed in the libfuncs list
use debug::PrintTrait;

#[test]
// #[ignore]
#[available_gas(30000000)]
fn test_set_bit() {
    let mut map: Pack = PackTrait::new();
    map.first = 2;
    map.set_bit(20);
    assert(map.first == 0x800000000000000000000000000000000000000000000000000000002, 'set bit');
    assert(!map.get_bit(19), 'get bit of index 19');
    assert(map.get_bit(20), 'get bit of index 20');
    assert(map.count_bit() == 2, 'count bit');

    let mut another_map: Pack = PackTrait::new();
    another_map.first = 3;
    another_map.set_bit(30);
    assert(another_map.count_bit() == 3, 'count bit');
    map.add_bit(another_map);
    assert(map.count_bit() == 4, 'add bit');
    map.subtract_bit(another_map);
    assert(map.count_bit() == 1, 'subtract bit');
}

#[test]
#[available_gas(30000000)]
fn test_sqr() {
    assert(square_root(17) == 4, 'compute square root of 17');
    assert(square_root(24) == 4, 'compute square root of 24');
}

#[test]
// #[ignore]
#[available_gas(300000000000000)]
fn test_generate_room() {
    {}
    // tokenId 5678 cavern type
    let seed = 54726856408304506636278424762823059598933394071647911965527120692794348915138;
    let size = 20;

    let (mut map, mut structure) = get_layout(seed, size);
    // print_map(map, structure);
    assert(
        structure == 1
            && map.first == 0x100001c030140201f020f902089c2088661b8641e0c07e0c0e47c1e66c14
            && map.second == 0x62c1442c1c4781c6781c6384c6185c31cbc13c000000000000000000000000
            && map.third == 0x0,
        'cavern error'
    );

    // tokenId 5678 entities
    let (x_array, y_array, t_array) = get_entities(seed, size);

    // print_array(@x_array, @y_array, @t_array);
    assert(*x_array.at(3) == 0x10, 'x error');
    assert(*y_array.at(3) == 0x12, 'y error');
    assert(*t_array.at(3) == 0x1, 't error');

    {}
    // tokenId 6666 room type
    let seed: u256 = 6335337818598560499429733180295617724328926230334923097623654911070136911834;
    let size = 17;

    let (mut map, mut structure) = get_layout(seed, size);
    // print_map(map, structure);
    assert(
        structure == 0
            && map.first == 0x18000c0002003fbc1ffe03ef01f000f80000
            && map.second == 0x0
            && map.third == 0x0,
        'room error'
    );
}

fn print_map(map: Pack, structure: u8) {
    '--------layout display--------'.print();
    'structure'.print();
    structure.print();

    let mut value = map.first;
    'map index'.print();
    'first'.print();
    'map value'.print();
    value.print();

    value = map.second;
    'map index'.print();
    'second'.print();
    'map value'.print();
    value.print();

    value = map.third;
    'map index'.print();
    'third'.print();
    'map value'.print();
    value.print();
}

fn print_array(x_array: @Array<u8>, y_array: @Array<u8>, t_array: @Array<u8>) {
    '--------entities display-------'.print();
    let mut limit = 0;
    loop {
        if limit == x_array.len() {
            break;
        }

        let x = *x_array.at(limit);
        let y = *y_array.at(limit);
        let t = *t_array.at(limit);
        '-- group --'.print();
        limit.print();
        'x'.print();
        x.print();
        'y'.print();
        y.print();
        't'.print();
        t.print();

        limit += 1;
    };
}

