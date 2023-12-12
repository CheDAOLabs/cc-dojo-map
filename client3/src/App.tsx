import { useComponentValue, useSync } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { useEffect, useState } from "react";
import "./App.css";
import { useDojo } from "./DojoContext";
import { Direction } from "./utils";
import { getEntityIdFromKeys, setComponentsFromGraphQLEntities } from "@dojoengine/utils";
import { Button, message, ConfigProvider, theme, Input, Select, Spin, InputNumber, Steps } from 'antd';



const coin = "<span class='sk'>🪙</span>";
const door = "<span class='sk'>🚪</span>"



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
            systemCalls: { spawn, move, mint, generate },
            components: { Moves, Position, Map },
            network: { contractComponents: {
                Moves: MovesContract,
                Position: PositionContract,
                Map: MapContract,
            },
                toriiClient,
            }
        },
        account: {
            create,
            list,
            select,
            account,
            isDeploying,
            clear, }
    } = useDojo();


    // entity id - this example uses the account address as the entity id
    const entityId = getEntityIdFromKeys([BigInt(account.address)]) as Entity;

    // get current component values
    const position = useComponentValue(Position, entityId);
    const moves = useComponentValue(Moves, entityId);
    const map = useComponentValue(Map, entityId);

    useSync(toriiClient, MovesContract, [BigInt(account.address)]);
    useSync(toriiClient, PositionContract, [BigInt(account.address)]);
    useSync(toriiClient, MapContract, [BigInt(account.address)]);

    console.log('Entity ID:', entityId);
    console.log('Position component:', Position);
    console.log('Position value:', position);

    console.log('map component:', Map);
    console.log('map value:', map);


    const [loading, setLoading] = useState(false);
    const [entities, setEntities] = useState(null);
    const [maps, setMaps] = useState([]);
    const [mapData, setMapData] = useState([]);
    const [tokenId, setTokenId] = useState(1);
    const [mapName, setMapName] = useState("loading...")
    const [owner, setOwner] = useState("0x...")

    const loadMap = async () => {
        setLoading(true);
        console.log("maps", maps)
        console.log("map", map)
        if (!map) {
            return
        }
        const owner = map?.owner;
        console.log("owner", owner)
        setOwner(owner.substring(0, 5) + '...' + owner.substring(owner.length - 5, owner.length));
        // setOwner(owner);
        // const name = decode_string([map.]);

        const map_arr = decode_map({
            first: map?.layout1,
            second: map?.layout2,
            third: map?.layout3
        }, map?.size);

        setMapData(map_arr);
        // setMapName()

        setLoading(false)
    }

    const render = () => {
        let rowString = ""
        if (!position) {
            return rowString;
        }
        if (mapData.length == 0) {
            return rowString;
        }
        if (!position.vec) {
            return rowString;
        }
        if (!position.vec.y) {
            return rowString;
        }
        let dungeon = JSON.parse(JSON.stringify(mapData));

        if (dungeon[0].length < position.vec.x || dungeon.length < position.vec.y) {
            console.log("a")
            return rowString;
        }

        dungeon[position.vec.y][position.vec.x] = "<span class='sk'>💀</span>";


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
    }, []);


    useEffect(() => {
        loadMap();
    }, [maps]);

    const [messageApi, contextHolder] = message.useMessage();

    const cc_move = async (account: any, direction: any) => {
        if (loading) {
            messageApi.open({
                type: 'warning',
                content: 'This is a success message',
            });
            return;
        }
        if (!position.vec) {
            return;
        }
        // setLoading(true);
        if (direction == Direction.Up) {
            if (isCollision(position.vec.x, position.vec.y - 1)) {
                console.log("is collision")
                // setLoading(false);
                return
            }
        }
        if (direction == Direction.Down) {
            if (isCollision(position.vec.x, position.vec.y + 1)) {
                console.log("is collision")
                // setLoading(false);
                return
            }
        }

        if (direction == Direction.Left) {
            if (isCollision(position.vec.x - 1, position.vec.y)) {
                console.log("is collision")
                // setLoading(false);
                return
            }
        }

        if (direction == Direction.Right) {
            if (isCollision(position.vec.x + 1, position.vec.y)) {
                console.log("is collision")
                // setLoading(false);
                return
            }
        }

        await move(account, direction)
        // setLoading(false);
    }

    const { darkAlgorithm } = theme;

    const onChangeTokenId = async () => {
        await loadMap()
    };

    const [gTokenId, setGTokenId] = useState(1)
    const onChangeGTokenId = async (value: number) => {
        console.log('changed', value);
        setGTokenId(value);
    };

    const generateToken = async (account: any) => {
        generate(account, gTokenId);
    }

    return (
        <ConfigProvider
            theme={{
                algorithm: darkAlgorithm,
            }}>
            <div>
                <Button onClick={create}>
                    {isDeploying ? "deploying burner" : "create burner"}
                </Button>
                <Button onClick={clear}>clear burners</Button>
            </div>
            <div className="card">
                select signer:{" "}
                <select onChange={e => select(e.target.value)}>
                    {list().map((account, index) => {
                        return <option value={account.address} key={index}>{account.address}</option>
                    })}
                </select>
            </div>
            <div className="card">
                <Button onClick={() => spawn(account)}>Spawn</Button>
                <Button onClick={() => mint(account)}>Mint</Button>

                <div>Moves Left: {moves ? `${moves['remaining']}` : 'Need to Spawn'}</div>
                <div>Position: {(position && position.vec && position.vec.x && position.vec.y) ? `${position.vec.x}, ${position.vec.y}` : 'Need to Spawn'}</div>
            </div>


            <div className="card"
                style={{
                    padding: 0,
                    backgroundColor: "black",
                    width: "650px",
                    height: "650px",
                    float: "left",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center"
                }}>

                <div className="container">
                    <div className="div1">
                        {loading ? (<div style={{
                            position: "relative",
                            textAlign: "center",
                            top: "325px",
                            width: "650px",
                            height: "650px",
                            backgroundColor: "rgba(0, 0, 0, 0.5)"
                        }}>
                            <Spin style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }} /></div>) : <></>}

                    </div>
                    <div className="div2">
                        <div style={{ display: "flex", alignItems: "center", height: "650px" }}>
                            <pre style={{}} className=" MapPre" dangerouslySetInnerHTML={{ __html: render() }}></pre>
                        </div>
                    </div>
                </div>


            </div>

            <div className="card" style={{ "float": "right" }}>

                <div>

                    <Button onClick={() => onChangeTokenId()}>Loading MAP</Button>

                    {/*<p>name: {mapName}</p>*/}
                    <p>owner: {owner}</p>
                </div>

                <br />
                <br />

                <div>

                    <InputNumber disabled={false} min={1} max={10000} defaultValue={1}
                        value={gTokenId}
                        onChange={onChangeGTokenId} />

                    <Button onClick={() => generateToken(account)}>Generate</Button>

                </div>
                <br />
                <br />
                <div>
                    {maps.map((map, index) => (
                        <li key={index}>{map.token_id}</li>
                    ))}
                </div>


                <br />
                <br />

                <Button onClick={() => cc_move(account, Direction.Up)}>Move Up
                </Button>
                <br />
                <Button onClick={() => cc_move(account, Direction.Left)}>Move Left</Button>
                <Button onClick={() => cc_move(account, Direction.Right)}>Move Right</Button>
                <br />
                <Button onClick={() => cc_move(account, Direction.Down)}>Move Down</Button>
            </div>


        </ConfigProvider>
    );
}

export default App;
