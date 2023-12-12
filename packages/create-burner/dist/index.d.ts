import { AccountInterface, Account, RpcProvider } from 'starknet';
import { Connector } from '@starknet-react/core';
import * as react from 'react';
import { ReactNode } from 'react';

declare class BurnerConnector extends Connector {
    private _account;
    _name: string;
    constructor(options: object, account: AccountInterface | Account | null);
    available(): boolean;
    ready(): Promise<boolean>;
    connect(): Promise<AccountInterface>;
    disconnect(): Promise<void>;
    initEventListener(): Promise<void>;
    removeEventListener(): Promise<void>;
    account(): Promise<AccountInterface | null>;
    get id(): string;
    get name(): string;
    get icon(): string;
}

declare const OPENZEPPELIN_ACCOUNT_GOERLI = "0x2f318C334780961FB129D2a6c30D0763d9a5C970";
declare const PREFUND_AMOUNT = "0x2386f26fc10000";
declare const KATANA_ETH_CONTRACT_ADDRESS = "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
declare const KATANA_ACCOUNT_CLASS_HASH = "0x04d07e40e93398ed3c76981e72dd1fd22557a78ce36c0515f679e27f0bb5bc5f";

type Burner = {
    address: string;
    active: boolean;
};
interface BurnerManagerOptions {
    masterAccount: Account;
    accountClassHash: string;
    rpcProvider: RpcProvider;
}

declare const BurnerContext: react.Context<BurnerManagerOptions | null>;
interface BurnerProviderProps {
    children: ReactNode;
    initOptions: BurnerManagerOptions;
}
declare const BurnerProvider: ({ children, initOptions, }: BurnerProviderProps) => JSX.Element;

/**
 * A React hook to manage Burner accounts.
 * Provides utility methods like get, list, select, and create.
 *
 * @returns An object with utility methods and properties.
 */
declare const useBurner: () => {
    get: (address: string) => Account;
    list: () => Burner[];
    select: (address: string) => void;
    create: () => Promise<Account>;
    listConnectors: () => BurnerConnector[];
    clear: () => void;
    account: Account | null;
    isDeploying: boolean;
    copyToClipboard: () => Promise<void>;
    applyFromClipboard: () => Promise<void>;
};

declare class BurnerManager {
    masterAccount: Account;
    accountClassHash: string;
    provider: RpcProvider;
    account: Account | null;
    isDeploying: boolean;
    burnerAccounts: Burner[];
    private setIsDeploying?;
    constructor({ masterAccount, accountClassHash, rpcProvider, }: BurnerManagerOptions);
    setIsDeployingCallback(callback: (isDeploying: boolean) => void): void;
    private updateIsDeploying;
    private getBurnerStorage;
    private setActiveBurnerAccount;
    init(): void;
    list(): Burner[];
    select(address: string): void;
    get(address: string): Account;
    clear(): void;
    getActiveAccount(): Account | null;
    create(): Promise<Account>;
    copyBurnersToClipboard(): Promise<void>;
    setBurnersFromClipboard(): Promise<void>;
}

/**
 * A React hook that takes the Burner Manager object avoiding the React Context.
 * Useful for building apps without React Context.
 *
 * @returns An object with utility methods and properties.
 */
declare const useBurnerManager: ({ burnerManager, }: {
    burnerManager: BurnerManager;
}) => {
    get: (address: string) => Account;
    list: () => Burner[];
    select: (address: string) => void;
    create: () => Promise<Account>;
    listConnectors: () => BurnerConnector[];
    clear: () => void;
    account: Account | null;
    isDeploying: boolean;
    copyToClipboard: () => Promise<void>;
    applyFromClipboard: () => Promise<void>;
};

/**
 * Pre-funds a given account by initiating a transfer transaction.
 *
 * @param address - The destination address to which funds are to be transferred.
 * @param account - The source account from which funds will be deducted.
 * @param ethContractAddress - The Ethereum contract address responsible for the transfer.
 *                             If not provided, defaults to KATANA_ETH_CONTRACT_ADDRESS.
 *
 * @returns - Returns the result of the transfer transaction, typically including transaction details.
 *
 * @throws - Throws an error if the transaction does not complete successfully.
 */
declare const prefundAccount: (address: string, account: AccountInterface, ethContractAddress?: string) => Promise<any>;

export { BurnerConnector, BurnerContext, BurnerManager, BurnerProvider, KATANA_ACCOUNT_CLASS_HASH, KATANA_ETH_CONTRACT_ADDRESS, OPENZEPPELIN_ACCOUNT_GOERLI, PREFUND_AMOUNT, prefundAccount, useBurner, useBurnerManager };
