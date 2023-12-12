import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { Direction, updatePositionWithDirection } from "../utils";
import {
    getEntityIdFromKeys,
    getEvents,
    setComponentsFromEvents,
} from "@dojoengine/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, contractComponents }: SetupNetworkResult,
    { Position, Moves }: ClientComponents
) {

    const spawn = async (signer: Account) => {
        const entityId = getEntityIdFromKeys([
            BigInt(signer.address),
        ]) as Entity;

        const positionId = uuid();
        Position.addOverride(positionId, {
            entity: entityId,
            value: { player: BigInt(entityId), vec: { x: 10, y: 10 } },
        });

        const movesId = uuid();
        Moves.addOverride(movesId, {
            entity: entityId,
            value: {
                player: BigInt(entityId),
                remaining: 100,
                last_direction: 0,
            },
        });

        try {
            const { transaction_hash } = await execute(
                signer,
                "actions",
                "spawn",
                []
            );

            setComponentsFromEvents(
                contractComponents,
                getEvents(
                    await signer.waitForTransaction(transaction_hash, {
                        retryInterval: 100,
                    })
                )
            );
        } catch (e) {
            console.log(e);
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        } finally {
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        }
    };

    const move = async (signer: Account, direction: Direction) => {
        const entityId = getEntityIdFromKeys([
            BigInt(signer.address),
        ]) as Entity;

        const positionId = uuid();
        Position.addOverride(positionId, {
            entity: entityId,
            value: {
                player: BigInt(entityId),
                vec: updatePositionWithDirection(
                    direction,
                    getComponentValue(Position, entityId) as any
                ).vec,
            },
        });

        const movesId = uuid();
        Moves.addOverride(movesId, {
            entity: entityId,
            value: {
                player: BigInt(entityId),
                remaining:
                    (getComponentValue(Moves, entityId)?.remaining || 0) - 1,
            },
        });

        try {
            const { transaction_hash } = await execute(
                signer,
                "actions",
                "move",
                [direction]
            );

            setComponentsFromEvents(
                contractComponents,
                getEvents(
                    await signer.waitForTransaction(transaction_hash, {
                        retryInterval: 100,
                    })
                )
            );
        } catch (e) {
            console.log(e);
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        } finally {
            Position.removeOverride(positionId);
            Moves.removeOverride(movesId);
        }
    };

    const mint = async (signer: Account) => {

        try {
            const tx = await execute(signer, "cc", "mint", [

            ]);
            setComponentsFromEvents(contractComponents,
                getEvents(
                    await signer.waitForTransaction(tx.transaction_hash,
                        { retryInterval: 100 }
                    )
                )
            );

        } catch (e) {
            console.log(e)
        }
    }

    const generate = async (signer: Account, tokenId: any) => {

        try {
            const tx = await execute(signer, "cc", "generate_dungeon", [tokenId, 0]);
            setComponentsFromEvents(contractComponents,
                getEvents(
                    await signer.waitForTransaction(tx.transaction_hash,
                        { retryInterval: 100 }
                    )
                )
            );

        } catch (e) {
            console.log(e)
        }

    }

    return {
        spawn,
        move,
        mint,
        generate
    };
}
