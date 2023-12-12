import { num, RpcProvider, Contract, Account, InvocationsDetails, InvokeFunctionResponse, AllowArray, Call, CallContractResponse } from 'starknet';

/**
 * Enumeration representing various entry points or functions available in the World.
 */
declare enum WorldEntryPoints {
    get = "entity",// Retrieve a single entity
    set = "set_entity",// Set or update a single entity
    entities = "entities",// Retrieve multiple entities
    execute = "execute",// Execute a specific command
    register_system = "register_system",// Register a new system
    register_component = "register_component",// Register a new component
    component = "component",// Access a component
    system = "system"
}
/**
 * Interface representing a query structure with domain and keys.
 */
interface Query {
    keys: num.BigNumberish[];
}
/**
 * ICommands interface provides a set of optional command methods that can be implemented
 * by classes to interact with the World system.
 */
interface ICommands {
    entity?(component: string, query: Query, offset: number, length: number): Promise<Array<bigint>>;
    entities?(component: string, length: number): Promise<Array<bigint>>;
    execute?(name: bigint, execute_calldata: Array<bigint>): Promise<Array<bigint>>;
    register_component?(class_hash: string): Promise<bigint>;
    register_system?(class_hash: string): Promise<bigint>;
    is_authorized?(system: string, component: string): Promise<bigint>;
    is_account_admin?(): Promise<bigint>;
    component?(name: string): Promise<bigint>;
    system?(name: string): Promise<bigint>;
    blocktime?(): Promise<bigint>;
    worldAge?(): Promise<bigint>;
}

/**
 * Provider class: An abstract base class for all providers.
 * It implements the ICommands interface, ensuring that any class deriving from Provider
 * will have implementations for the entity and entities methods.
 */
declare abstract class Provider implements ICommands {
    private readonly worldAddress;
    /**
     * Constructor: Initializes the Provider with a given world address.
     *
     * @param {string} worldAddress - The address of the world.
     */
    constructor(worldAddress: string);
    /**
     * Abstract method to retrieve a single entity's details.
     * Classes extending Provider should provide a concrete implementation for this method.
     *
     * @param {string} component - The component to query.
     * @param {Query} query - The query details.
     * @param {number} offset - Starting offset.
     * @param {number} length - Length to retrieve.
     * @returns {Promise<Array<bigint>>} - A promise that resolves to an array of bigints representing the entity's details.
     */
    abstract entity(component: string, query: Query, offset: number, length: number): Promise<Array<bigint>>;
    /**
     * Abstract method to retrieve multiple entities' details.
     * Classes extending Provider should provide a concrete implementation for this method.
     *
     * @param {string} component - The component to query.
     * @param {number} length - Number of entities to retrieve.
     * @returns {Promise<Array<bigint>>} - A promise that resolves to an array of bigints representing the entities' details.
     */
    abstract entities(component: string, length: number): Promise<Array<bigint>>;
    /**
     * Retrieves the stored world address.
     *
     * @returns {string} - The address of the world.
     */
    getWorldAddress(): string;
}

/**
 * RPCProvider class: Extends the generic Provider to handle RPC interactions.
 */
declare class RPCProvider extends Provider {
    provider: RpcProvider;
    contract: Contract;
    manifest: any;
    /**
     * Constructor: Initializes the RPCProvider with the given world address and URL.
     *
     * @param {string} world_address - Address of the world.
     * @param {string} [url=LOCAL_KATANA] - RPC URL (defaults to LOCAL_KATANA).
     */
    constructor(world_address: string, manifest?: any, url?: string);
    /**
     * Retrieves a single entity's details.
     *
     * @param {string} model - The component to query.
     * @param {Query} query - The query details.
     * @param {number} [offset=0] - Starting offset (defaults to 0).
     * @param {number} [length=0] - Length to retrieve (defaults to 0).
     * @returns {Promise<Array<bigint>>} - A promise that resolves to an array of bigints representing the entity's details.
     */
    entity(model: string, query: Query, offset?: number, length?: number): Promise<Array<bigint>>;
    /**
     * Retrieves multiple entities' details.
     *
     * @param {string} component - The component to query.
     * @param {number} length - Number of entities to retrieve.
     * @returns {Promise<Array<bigint>>} - A promise that resolves to an array of bigints representing the entities' details.
     */
    entities(model: string, length: number): Promise<Array<bigint>>;
    /**
     * Retrieves a component's details.
     *
     * @param {string} name - Name of the component.
     * @returns {Promise<bigint>} - A promise that resolves to a bigint representing the component's details.
     */
    component(name: string): Promise<bigint>;
    /**
     * Executes a function with the given parameters.
     *
     * @param {Account} account - The account to use.
     * @param {string} contract - The contract to execute.
     * @param {string} call - The function to call.
     * @param {num.BigNumberish[]} call_data - The call data for the function.
     * @param {InvocationsDetails | undefined} transactionDetails - The transactionDetails allow to override maxFee & version
     * @returns {Promise<InvokeFunctionResponse>} - A promise that resolves to the response of the function execution.
     */
    execute(account: Account, contract_name: string, call: string, calldata: num.BigNumberish[], transactionDetails?: InvocationsDetails | undefined): Promise<InvokeFunctionResponse>;
    /**
     * Executes a function with the given parameters.
     *
     * @param {Account} account - The account to use.
     * @param {AllowArray<Call>} calls - The calls to execute.
     * @param {InvocationsDetails | undefined} transactionDetails - The transactionDetails allow to override maxFee & version
     * @returns {Promise<InvokeFunctionResponse>} - A promise that resolves to the response of the function execution.
     */
    executeMulti(account: Account, calls: AllowArray<Call>, transactionDetails?: InvocationsDetails | undefined): Promise<InvokeFunctionResponse>;
    /**
     * Retrieves current uuid from the world contract
     *
     * @returns {Promise<number>} - A promise that resolves to the world uuid
     * @throws {Error} - Throws an error if the call fails.
     *
     * @example
     * const uuid = await provider.uuid();
     * console.log(uuid);
     * // => 6
     *
     */
    uuid(): Promise<number>;
    /**
     * Calls a function with the given parameters.
     *
     * @param {string} contract - The contract to call.
     * @param {string} call - The function to call.
     * @returns {Promise<CallContractResponse>} - A promise that resolves to the response of the function call.
     */
    call(contract_name: string, call: string, calldata?: num.BigNumberish[]): Promise<CallContractResponse>;
}

/**
 * Extracts the names of all components from a manifest.
 *
 * @param {any} manifest - The input manifest containing component details.
 * @returns {any} - An array containing the names of all components.
 */
declare function getAllComponentNames(manifest: any): any;
/**
 * Extracts the names of all components from a manifest and converts them to `felt252` representation.
 *
 * @param {any} manifest - The input manifest containing component details.
 * @returns {any} - An array containing the `felt252` representation of component names.
 */
declare function getAllComponentNamesAsFelt(manifest: any): any;
/**
 * Extracts the names of all systems from a manifest.
 *
 * @param {any} manifest - The input manifest containing system details.
 * @returns {any} - An array containing the names of all systems.
 */
declare function getAllSystemNames(manifest: any): any;
/**
 * Extracts the names of all systems from a manifest and converts them to `felt252` representation.
 *
 * @param {any} manifest - The input manifest containing system details.
 * @returns {any} - An array containing the `felt252` representation of system names.
 */
declare function getAllSystemNamesAsFelt(manifest: any): any;
/**
 * Gets a contract from a manifest by name.
 *
 * @param {any} manifest - The manifest object.
 * @param {string} name - The name of the contract.
 * @returns {any} The contract object.
 *
 */
declare const getContractByName: (manifest: any, name: string) => any;

export { type ICommands, type Query, RPCProvider, WorldEntryPoints, getAllComponentNames, getAllComponentNamesAsFelt, getAllSystemNames, getAllSystemNamesAsFelt, getContractByName };
