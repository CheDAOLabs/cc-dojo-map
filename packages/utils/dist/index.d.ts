import { Event } from 'starknet';
import { Components, Type, Component, Entity } from '@dojoengine/recs';

/**
 * Filters events from a given receipt based on specific criteria.
 *
 * @param {any} receipt - The transaction receipt.
 * @returns {any[]} An array of events that meet the filtering criteria.
 */
declare function getEvents(receipt: any): any[];
/**
 * Iterates over an array of events and updates components based on event data.
 *
 * @param {Components} components - The components to be updated.
 * @param {Event[]} events - An array of events containing component data.
 */
declare function setComponentsFromEvents(components: Components, events: Event[]): void;
/**
 * Updates a component based on the data from a single event.
 *
 * @param {Components} components - The components to be updated.
 * @param {string[]} eventData - The data from a single event.
 */
declare function setComponentFromEvent(components: Components, eventData: string[]): void;
/**
 * Parse component value into typescript typed value
 *
 * @param {string} value - The value to parse
 * @param {RecsType} type - The target type
 */
declare function parseComponentValue(value: string, type: Type): string | number | bigint | boolean;
/**
 * Decodes a component based on the provided schema.
 *
 * @param {Component} component - The component description created by defineComponent(), containing the schema and metadata types.
 * @param {string[]} values - An array of string values used to populate the decoded component.
 * @returns {Object} The decoded component object.
 */
declare function decodeComponent(component: Component, values: string[]): any;
/**
 * Converts a hexadecimal string to an ASCII string.
 *
 * @param {string} hex - The hexadecimal string.
 * @returns {string} The converted ASCII string.
 */
declare function hexToAscii(hex: string): string;
/**
 * Determines the entity ID from an array of keys. If only one key is provided,
 * it's directly used as the entity ID. Otherwise, a poseidon hash of the keys is calculated.
 *
 * @param {bigint[]} keys - An array of big integer keys.
 * @returns {Entity} The determined entity ID.
 */
declare function getEntityIdFromKeys(keys: bigint[]): Entity;
/**
 * Iterate through GraphQL entities and set components based on them.
 *
 * @param {Components} components - The target components structure where the parsed data will be set.
 * @param {any[]} entities - The array of GraphQL entities to parse and set in the components.
 */
declare function setComponentsFromGraphQLEntities(components: Components, entities: any): void;
/**
 * Set a component from a single GraphQL entity.
 *
 * @param {Components} components - The target components structure where the parsed data will be set.
 * @param {any} entityEdge - The GraphQL entity containing node information to parse and set in the components.
 */
declare function setComponentFromGraphQLEntity(components: Components, entityEdge: any): void;
/**
 * Parse a component's value from a GraphQL entity based on its type or schema.
 *
 * @param {any} value - The raw value from the GraphQL entity.
 * @param {RecsType | object} type - The expected type or schema for the value.
 * @returns {any} The parsed value.
 */
declare function parseComponentValueFromGraphQLEntity(value: any, type: Type | object): any;
declare function shortenHex(hexString: string, numDigits?: number): string;

declare const snoise: (v: any) => any;
declare const recursiveSNoise: (p: any, pers: any, octaves: any) => number;

export { decodeComponent, getEntityIdFromKeys, getEvents, hexToAscii, parseComponentValue, parseComponentValueFromGraphQLEntity, recursiveSNoise, setComponentFromEvent, setComponentFromGraphQLEntity, setComponentsFromEvents, setComponentsFromGraphQLEntities, shortenHex, snoise };
