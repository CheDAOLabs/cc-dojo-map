import * as _dojoengine_recs from '@dojoengine/recs';
import { Schema, Component, Metadata, Entity, ComponentValue, QueryFragment } from '@dojoengine/recs';
import { Client } from '@dojoengine/torii-client';

declare function useSubscribeEntityModel<S extends Schema>(client: Client, component: Component<S, Metadata, undefined>, keys: any[]): void;

declare function useSync<S extends Schema>(client: Client, component: Component<S, Metadata, undefined>, keys: any[]): void;

declare function useComponentValue<S extends Schema>(component: Component<S>, entity: Entity | undefined, defaultValue: ComponentValue<S>): ComponentValue<S>;
declare function useComponentValue<S extends Schema>(component: Component<S>, entity: Entity | undefined): ComponentValue<S> | undefined;

type UsePromiseResult<T> = PromiseSettledResult<Awaited<T>> | {
    status: "pending";
} | {
    status: "idle";
};
declare function usePromise<T>(promise: PromiseLike<T> | null | undefined): UsePromiseResult<T>;

type ModelEntry<S extends Schema> = {
    model: Component<S, Metadata, undefined>;
    keys: any[];
};
declare function createSyncManager<S extends Schema>(client: Client, modelEntries: ModelEntry<S>[]): {
    cleanup: () => void;
    sync: () => void;
};

/**
 * Returns all matching entities for a given entity query,
 * and triggers a re-render as new query results come in.
 *
 * @param fragments Query fragments to match against, executed from left to right.
 * @param options.updateOnValueChange False - re-renders only on entity array changes. True (default) - also on component value changes.
 * @returns Set of entities matching the query fragments.
 */
declare function useEntityQuery(fragments: QueryFragment[], options?: {
    updateOnValueChange?: boolean;
}): _dojoengine_recs.Entity[];

declare function convertValues(schema: Schema, values: any): any;

declare function useSyncWorld<S extends Schema>(client: Client, components: Component<S, Metadata, undefined>[]): void;
declare const getEntities: <S extends Schema>(client: Client, components: Component<S, Metadata, undefined>[]) => Promise<void>;

export { type UsePromiseResult, convertValues, createSyncManager, getEntities, useComponentValue, useEntityQuery, usePromise, useSubscribeEntityModel, useSync, useSyncWorld };
