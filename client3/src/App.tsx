import {useDojo} from './DojoContext';
import {Direction,} from './dojo/createSystemCalls'
import {useComponentValue} from "@latticexyz/react";
import {Entity} from '@latticexyz/recs';
import {useEffect, useState} from 'react';
import {setComponentsFromGraphQLEntities} from '@dojoengine/utils';
import {Button, message, ConfigProvider, theme, Input, Select, Spin, InputNumber, Steps} from 'antd';
import {shortString} from "starknet";

const coin = "<span class='sk'>🪙</span>";
const door = "<span class='sk'>🚪</span>"


const decode_string = (array: any) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        let temp = shortString.decodeShortString(array[i]);
        // console.log("temp:", temp);
        result += temp;
    }
    return result;
};

const decode_map = (layout: any, size: any) => {
    // eslint-disable-next-line
    let layoutIntFirst = BigInt(layout.first).toString(2).padStart(248, '0');
    // eslint-disable-next-line
    let layoutIntSecond = BigInt(layout.second).toString(2);
    // eslint-disable-next-line
    let layoutIntThird = BigInt(layout.third).toString(2);
    let bits = layoutIntFirst + layoutIntSecond + layoutIntThird;
    console.log("bits", bits);

    // Store dungeon in 2D array
    let dungeon = [];
    // let grid = []
    let counter = 0;
    for (let y = 0; y < size; y++) {
        let row = []
        // let grid_row = [];
        for (let x = 0; x < size; x++) {
            // eslint-disable-next-line
            const bit = bits[counter] == '1' ? '<span class="bl"> </span>' : '<span class="bl">X</span>';
            row.push(bit)
            // grid_row.push(bits[counter] == 1 ? 0 : 1);
            counter++;
        }
        dungeon.push(row)
        // grid.push(grid_row);
    }
    return dungeon;
}

function App() {
    const {
        setup: {
            systemCalls: {spawn, move, mint, generate},
            components,
            network: {graphSdk, contractComponents}
        },
        account: {create, list, select, account, isDeploying}
    } = useDojo();


    // extract query
    const {getEntities} = graphSdk()

    // entity id - this example uses the account address as the entity id
    const entityId = account.address.toString();

    // get current component values
    const position = useComponentValue(components.Position, entityId as Entity);
    const moves = useComponentValue(components.Moves, entityId as Entity);


    const [loading, setLoading] = useState(false);
    const [entities, setEntities] = useState(null);
    const [maps, setMaps] = useState([]);
    const [mapData, setMapData] = useState([
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ],
        [
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X",
            "X"
        ]
    ]);
    const [tokenId, setTokenId] = useState(1);
    const [mapName, setMapName] = useState("loading...")
    const [owner, setOwner] = useState("0x...")

    const loadMap = async (token_id) => {
        setLoading(true);

        setLoading(false)
    }

    const render = () => {
        let rowString = ""
        if (!position) {
            return rowString;
        }
        let dungeon = JSON.parse(JSON.stringify(mapData));
        console.log("x,y", position.vec['x'], position.vec['y'])
        if (dungeon[0].length < position.vec['x'] || dungeon.length < position.vec['y']) {
            console.log("a")
            return rowString;
        }

        dungeon[position.vec['y']][position.vec['x']] = "<span class='sk'>💀</span>";


        if (entities != null) {
            if (entities.entity_data.length > 0) {


                for (let i = 0; i < entities.entity_data.length; i++) {
                    let entity = {
                        x: entities.x[i],
                        y: entities.y[i],
                        entityType: entities.entity_data[i]
                    }

                    // entityList.push(entity)

                    // Update dungeon with our entity
                    if (entity.entityType == 1) {
                        // Place a door
                        dungeon[entity.y][entity.x] = coin;
                    } else if (entity.entityType == 0) {
                        // Place a point of interest
                        dungeon[entity.y][entity.x] = door;
                    }
                }
            }
        }

        for (let y = 0; y < dungeon.length; y++) {
            for (let x = 0; x < dungeon.length; x++) {
                const tile = dungeon[y][x]
                rowString += `${tile} `
            }
            rowString += '\n'
        }
        return (rowString)
    };

    const isCollision = (x: any, y: any) => {
        const res = mapData[y][x] != '<span class="bl"> </span>';
        return res;
    }

    useEffect(() => {
        async function handleKeyDown(event: any) {
            console.log("handle KeyDown:", event.key)
            if (event.key === 'w') {
                await cc_move(account, Direction.Up)
            }

            if (event.key === 's') {
                await cc_move(account, Direction.Down)
            }

            if (event.key === 'a') {
                await cc_move(account, Direction.Left)
            }

            if (event.key === 'd') {
                await cc_move(account, Direction.Right)
            }
        }

        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [position]);


    useEffect(() => {
        loadMap(tokenId);
    }, []);

    // use graphql to current state data
    useEffect(() => {
        if (!entityId) return;

        const fetchData = async () => {
            try {
                const {data} = await getEntities();
                console.log("data", data)
                if (data && data.entities) {
                    setComponentsFromGraphQLEntities(contractComponents, data.entities.edges);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [entityId, contractComponents]);


    const [messageApi, contextHolder] = message.useMessage();

    const cc_move = async (account: any, direction: any) => {
        if (loading) {
            messageApi.open({
                type: 'warning',
                content: 'This is a success message',
            });
            return;
        }
        setLoading(true);
        if (direction == Direction.Up) {
            if (isCollision(position.x, position.y - 1)) {
                console.log("is collision")
                setLoading(false);
                return
            }
        }
        if (direction == Direction.Down) {
            if (isCollision(position.x, position.y + 1)) {
                console.log("is collision")
                setLoading(false);
                return
            }
        }

        if (direction == Direction.Left) {
            if (isCollision(position.x - 1, position.y)) {
                console.log("is collision")
                setLoading(false);
                return
            }
        }

        if (direction == Direction.Right) {
            if (isCollision(position.x + 1, position.y)) {
                console.log("is collision")
                setLoading(false);
                return
            }
        }

        await move(account, direction)
        setLoading(false);
    }

    const {darkAlgorithm} = theme;

    return (
        <ConfigProvider
            theme={{
                algorithm: darkAlgorithm,
            }}>            <button onClick={create}>{isDeploying ? "deploying burner" : "create burner"}</button>
            <div className="card">
                select signer:{" "}
                <select onChange={e => select(e.target.value)}>
                    {list().map((account, index) => {
                        return <option value={account.address} key={index}>{account.address}</option>
                    })}i
                </select>
            </div>
            <div className="card">
                <button onClick={() => spawn(account)}>Spawn</button>
                <button onClick={() => mint(account)}>Mint</button>
                <button onClick={() => generate(account)}>Generate</button>

                <div>Moves Left: {moves ? `${moves['remaining']}` : 'Need to Spawn'}</div>
                <div>Position: {position ? `${position.vec['x']}, ${position.vec['y']}` : 'Need to Spawn'}</div>
            </div>
            <div className="card">
                <button onClick={() => move(account, Direction.Up)}>Move Up</button>
                <br/>
                <button onClick={() => move(account, Direction.Left)}>Move Left</button>
                <button onClick={() => move(account, Direction.Right)}>Move Right</button>
                <br/>
                <button onClick={() => move(account, Direction.Down)}>Move Down</button>
            </div>
        </ConfigProvider>
    );
}

export default App;
