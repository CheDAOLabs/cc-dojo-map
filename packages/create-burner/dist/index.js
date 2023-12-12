// src/connectors/burner.ts
import { Connector } from "@starknet-react/core";
var BurnerConnector = class extends Connector {
  _account;
  _name = "Burner Connector";
  // Use the "options" type as per your need. Here, I am assuming it to be an object.
  constructor(options, account) {
    super({ options });
    this._account = account;
  }
  available() {
    return true;
  }
  async ready() {
    return true;
  }
  async connect() {
    if (!this._account) {
      throw new Error("account not found");
    }
    return Promise.resolve(this._account);
  }
  async disconnect() {
    Promise.resolve(this._account == null);
  }
  async initEventListener() {
    return Promise.resolve();
  }
  async removeEventListener() {
    return Promise.resolve();
  }
  async account() {
    return Promise.resolve(this._account);
  }
  get id() {
    return this._account?.address.toString() || "Burner Account";
  }
  get name() {
    return this._name;
  }
  get icon() {
    return "my-icon-url";
  }
};

// src/constants/index.ts
var OPENZEPPELIN_ACCOUNT_GOERLI = "0x2f318C334780961FB129D2a6c30D0763d9a5C970";
var PREFUND_AMOUNT = "0x2386f26fc10000";
var KATANA_ETH_CONTRACT_ADDRESS = "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
var KATANA_ACCOUNT_CLASS_HASH = "0x04d07e40e93398ed3c76981e72dd1fd22557a78ce36c0515f679e27f0bb5bc5f";

// src/context/burnerProvider.tsx
import { createContext } from "react";
import { jsx } from "react/jsx-runtime";
var BurnerContext = createContext(null);
var BurnerProvider = ({
  children,
  initOptions
}) => {
  return /* @__PURE__ */ jsx(BurnerContext.Provider, { value: initOptions, children });
};

// src/hooks/useBurner.ts
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

// src/manager/burnerManager.ts
import { Account, CallData as CallData2, ec, hash, stark } from "starknet";

// src/utils/storage.ts
import Cookies from "js-cookie";
var hasLocalStorageSupport = () => {
  try {
    const testKey = "__test__";
    if (typeof window !== "undefined") {
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
var isLocalStorage = hasLocalStorageSupport();
var safeParse = (data) => {
  try {
    if (data === "")
      return null;
    return JSON.parse(data);
  } catch (e) {
    console.error("Error parsing JSON data:", e, "Data:", data);
    return null;
  }
};
var Storage = {
  keys: () => {
    if (isLocalStorage) {
      return Object.keys(window.localStorage);
    }
    return Object.keys(Cookies.get());
  },
  get: (key) => {
    if (isLocalStorage) {
      return safeParse(window.localStorage.getItem(key) || "");
    }
    return safeParse(Cookies.get(key) || "");
  },
  set: (key, value) => {
    const data = JSON.stringify(value);
    if (isLocalStorage) {
      window.localStorage.setItem(key, data);
    } else {
      Cookies.set(key, data, {
        secure: true,
        sameSite: "strict"
      });
    }
  },
  remove: (key) => {
    if (isLocalStorage) {
      window.localStorage.removeItem(key);
    } else {
      Cookies.remove(key);
    }
  },
  clear: () => {
    if (isLocalStorage) {
      window.localStorage.clear();
    } else {
      const cookies = Cookies.get();
      Object.keys(cookies).forEach((key) => Cookies.remove(key));
    }
  }
};
var storage_default = Storage;

// src/manager/prefundAccount.ts
import {
  CallData,
  TransactionFinalityStatus
} from "starknet";
var prefundAccount = async (address, account, ethContractAddress = KATANA_ETH_CONTRACT_ADDRESS) => {
  try {
    const transferOptions = {
      contractAddress: ethContractAddress,
      entrypoint: "transfer",
      calldata: CallData.compile([address, PREFUND_AMOUNT, "0x0"])
    };
    const nonce = await account.getNonce();
    const { transaction_hash } = await account.execute(
      transferOptions,
      void 0,
      {
        nonce,
        maxFee: 0
        // This is set to 0 for now, consider adjusting it based on network conditions or requirements.
      }
    );
    const result = await account.waitForTransaction(transaction_hash, {
      retryInterval: 1e3,
      successStates: [TransactionFinalityStatus.ACCEPTED_ON_L2]
    });
    if (!result) {
      throw new Error("Transaction did not complete successfully.");
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// src/manager/burnerManager.ts
var BurnerManager = class {
  masterAccount;
  accountClassHash;
  provider;
  account = null;
  isDeploying = false;
  burnerAccounts = [];
  setIsDeploying;
  constructor({
    masterAccount,
    accountClassHash,
    rpcProvider
  }) {
    this.masterAccount = masterAccount;
    this.accountClassHash = accountClassHash;
    this.provider = rpcProvider;
  }
  setIsDeployingCallback(callback) {
    this.setIsDeploying = callback;
  }
  updateIsDeploying(status) {
    this.isDeploying = status;
    if (this.setIsDeploying) {
      this.setIsDeploying(status);
    }
  }
  getBurnerStorage() {
    return storage_default.get("burners") || {};
  }
  setActiveBurnerAccount(storage) {
    for (let address in storage) {
      if (storage[address].active) {
        this.account = new Account(
          this.provider,
          address,
          storage[address].privateKey
        );
        return;
      }
    }
  }
  init() {
    const storage = this.getBurnerStorage();
    if (Object.keys(storage).length > 0) {
      const firstAddr = Object.keys(storage)[0];
      this.masterAccount?.getTransactionReceipt(storage[firstAddr].deployTx).then((response) => {
        if (!response) {
          this.account = null;
          storage_default.remove("burners");
          throw new Error(
            "Burners not deployed, chain may have restarted"
          );
        }
      }).catch(() => {
        throw new Error("Error fetching transaction receipt");
      });
      this.setActiveBurnerAccount(storage);
    }
  }
  list() {
    const storage = this.getBurnerStorage();
    return Object.keys(storage).map((address) => {
      return {
        address,
        active: storage[address].active
      };
    });
  }
  select(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    for (let addr in storage) {
      storage[addr].active = false;
    }
    storage[address].active = true;
    storage_default.set("burners", storage);
    this.account = new Account(
      this.provider,
      address,
      storage[address].privateKey
    );
  }
  get(address) {
    const storage = this.getBurnerStorage();
    if (!storage[address]) {
      throw new Error("burner not found");
    }
    return new Account(this.provider, address, storage[address].privateKey);
  }
  clear() {
    storage_default.clear();
  }
  getActiveAccount() {
    const storage = this.getBurnerStorage();
    for (let address in storage) {
      if (storage[address].active) {
        return new Account(
          this.provider,
          address,
          storage[address].privateKey
        );
      }
    }
    return null;
  }
  async create() {
    this.updateIsDeploying(true);
    const privateKey = stark.randomAddress();
    const publicKey = ec.starkCurve.getStarkKey(privateKey);
    const address = hash.calculateContractAddressFromHash(
      publicKey,
      this.accountClassHash,
      CallData2.compile({ publicKey }),
      0
    );
    if (!this.masterAccount) {
      throw new Error("wallet account not found");
    }
    try {
      await prefundAccount(address, this.masterAccount);
    } catch (e) {
      this.isDeploying = false;
    }
    const accountOptions = {
      classHash: this.accountClassHash,
      constructorCalldata: CallData2.compile({ publicKey }),
      addressSalt: publicKey
    };
    const burner = new Account(this.provider, address, privateKey);
    const nonce = await this.account?.getNonce();
    const { transaction_hash: deployTx } = await burner.deployAccount(
      accountOptions,
      {
        nonce,
        maxFee: 0
        // TODO: update
      }
    );
    const storage = this.getBurnerStorage();
    for (let address2 in storage) {
      storage[address2].active = false;
    }
    storage[address] = {
      privateKey,
      publicKey,
      deployTx,
      active: true
    };
    this.account = burner;
    this.updateIsDeploying(false);
    storage_default.set("burners", storage);
    return burner;
  }
  async copyBurnersToClipboard() {
    const burners = this.getBurnerStorage();
    try {
      await navigator.clipboard.writeText(JSON.stringify(burners));
    } catch (error) {
      throw error;
    }
  }
  async setBurnersFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      const burners = JSON.parse(text);
      let activeAddress = null;
      for (const [address, burner] of Object.entries(burners)) {
        if (burner.active) {
          activeAddress = address;
          break;
        }
      }
      storage_default.set("burners", burners);
      if (activeAddress) {
        this.select(activeAddress);
      }
    } catch (error) {
      throw error;
    }
  }
};

// src/hooks/useBurner.ts
var useBurner = () => {
  const initParams = useContext(BurnerContext);
  if (!initParams) {
    throw new Error("useBurner must be used within a BurnerProvider");
  }
  const burnerManager = useMemo(
    () => new BurnerManager(initParams),
    [initParams]
  );
  const [account, setAccount] = useState(null);
  const [burnerUpdate, setBurnerUpdate] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  useEffect(() => {
    burnerManager.init();
    setAccount(burnerManager.getActiveAccount());
  }, []);
  const list = useCallback(() => {
    return burnerManager.list();
  }, [burnerManager.list(), burnerUpdate]);
  const select = useCallback(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const get = useCallback(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const clear = useCallback(() => {
    burnerManager.clear();
    setBurnerUpdate((prev) => prev + 1);
  }, [burnerManager]);
  const create = useCallback(async () => {
    burnerManager.setIsDeployingCallback(setIsDeploying);
    const newAccount = await burnerManager.create();
    setAccount(newAccount);
    return newAccount;
  }, [burnerManager]);
  const listConnectors = useCallback(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          options: {
            id: burner.address
          }
        },
        get(burner.address)
      );
    });
  }, [burnerManager.isDeploying]);
  const copyToClipboard = useCallback(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = useCallback(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setBurnerUpdate((prev) => prev + 1);
  }, [burnerManager]);
  return {
    get,
    list,
    select,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    copyToClipboard,
    applyFromClipboard
  };
};

// src/hooks/useBurnerManager.ts
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState2 } from "react";
var useBurnerManager = ({
  burnerManager
}) => {
  if (!burnerManager.masterAccount) {
    throw new Error("BurnerManagerClass must be provided");
  }
  const [account, setAccount] = useState2(null);
  const [burnerUpdate, setBurnerUpdate] = useState2(0);
  const [isDeploying, setIsDeploying] = useState2(false);
  useEffect2(() => {
    burnerManager.init();
    setAccount(burnerManager.getActiveAccount());
  }, []);
  const list = useCallback2(() => {
    return burnerManager.list();
  }, [burnerManager.list(), burnerUpdate]);
  const select = useCallback2(
    (address) => {
      burnerManager.select(address);
      setAccount(burnerManager.getActiveAccount());
    },
    [burnerManager]
  );
  const get = useCallback2(
    (address) => {
      return burnerManager.get(address);
    },
    [burnerManager]
  );
  const clear = useCallback2(() => {
    burnerManager.clear();
    setBurnerUpdate((prev) => prev + 1);
  }, [burnerManager]);
  const create = useCallback2(async () => {
    burnerManager.setIsDeployingCallback(setIsDeploying);
    const newAccount = await burnerManager.create();
    setAccount(newAccount);
    return newAccount;
  }, [burnerManager]);
  const listConnectors = useCallback2(() => {
    const burners = list();
    return burners.map((burner) => {
      return new BurnerConnector(
        {
          options: {
            id: burner.address
          }
        },
        get(burner.address)
      );
    });
  }, [burnerManager.isDeploying]);
  const copyToClipboard = useCallback2(async () => {
    await burnerManager.copyBurnersToClipboard();
  }, [burnerManager]);
  const applyFromClipboard = useCallback2(async () => {
    await burnerManager.setBurnersFromClipboard();
    setAccount(burnerManager.getActiveAccount());
    setBurnerUpdate((prev) => prev + 1);
  }, [burnerManager]);
  return {
    get,
    list,
    select,
    create,
    listConnectors,
    clear,
    account,
    isDeploying,
    copyToClipboard,
    applyFromClipboard
  };
};
export {
  BurnerConnector,
  BurnerContext,
  BurnerManager,
  BurnerProvider,
  KATANA_ACCOUNT_CLASS_HASH,
  KATANA_ETH_CONTRACT_ADDRESS,
  OPENZEPPELIN_ACCOUNT_GOERLI,
  PREFUND_AMOUNT,
  prefundAccount,
  useBurner,
  useBurnerManager
};
//# sourceMappingURL=index.js.map