// src/useSubscribeEntityModel.ts
import { getEntityIdFromKeys } from "@dojoengine/utils";
import {
  setComponent
} from "@dojoengine/recs";
import { useEffect, useMemo } from "react";

// src/utils.ts
import { Type as RecsType } from "@dojoengine/recs";
function convertValues(schema, values) {
  return Object.keys(schema).reduce((acc, key) => {
    const schemaType = schema[key];
    const value = values[key];
    if (typeof schemaType === "object" && value && typeof value === "object") {
      acc[key] = convertValues(schemaType, value);
    } else {
      acc[key] = schemaType === RecsType.BigInt ? BigInt(value) : Number(value);
    }
    return acc;
  }, {});
}

// src/useSubscribeEntityModel.ts
function useSubscribeEntityModel(client, component, keys) {
  const entityIndex = useMemo(() => {
    if (keys.length === 1)
      return keys[0].toString();
    return getEntityIdFromKeys(keys);
  }, [keys]);
  const componentName = useMemo(
    () => component.metadata?.name,
    [component.metadata?.name]
  );
  const keys_to_strings = useMemo(
    () => keys.map((key) => key.toString()),
    [keys]
  );
  const setModelValue = async () => {
    try {
      setComponent(
        component,
        entityIndex,
        convertValues(
          component.schema,
          await client.getModelValue(
            componentName,
            keys_to_strings
          )
        )
      );
    } catch (error) {
      console.error("Failed to fetch or set model value:", error);
    }
  };
  useEffect(() => {
    client.onSyncEntityChange(
      { model: componentName, keys: keys_to_strings },
      setModelValue
    );
  }, [client]);
}

// src/useSync.ts
import { getEntityIdFromKeys as getEntityIdFromKeys2 } from "@dojoengine/utils";
import {
  setComponent as setComponent2
} from "@dojoengine/recs";
import { useEffect as useEffect2 } from "react";
function useSync(client, component, keys) {
  useEffect2(() => {
    let isMounted = true;
    const fetchAndSetModelValue2 = async () => {
      try {
        if (isMounted) {
          setComponent2(
            component,
            getEntityIdFromKeys2(
              keys.map((key) => BigInt(key))
            ),
            convertValues(
              component.schema,
              await client.getModelValue(
                component.metadata?.name,
                keys.map((key) => key.toString())
              )
            )
          );
        }
      } catch (error) {
        console.error("Failed to fetch or set model value:", error);
      }
    };
    fetchAndSetModelValue2();
    return () => {
      isMounted = false;
    };
  }, [client]);
  useEffect2(() => {
    const entity = {
      model: component.metadata?.name,
      keys: keys.map((key) => key.toString())
    };
    client.addEntitiesToSync([entity]);
    return () => {
      client.removeEntitiesToSync([entity]).catch((error) => {
        console.error("Failed to remove entities on cleanup", error);
      });
    };
  }, [client]);
}

// src/useComponentValue.ts
import {
  defineQuery,
  getComponentValue,
  Has,
  isComponentUpdate
} from "@dojoengine/recs";
import { useEffect as useEffect3, useState } from "react";
function useComponentValue(component, entity, defaultValue) {
  const [value, setValue] = useState(
    entity != null ? getComponentValue(component, entity) : void 0
  );
  useEffect3(() => {
    setValue(
      entity != null ? getComponentValue(component, entity) : void 0
    );
    if (entity == null)
      return;
    const queryResult = defineQuery([Has(component)], { runOnInit: false });
    const subscription = queryResult.update$.subscribe((update) => {
      if (isComponentUpdate(update, component) && update.entity === entity) {
        const [nextValue] = update.value;
        setValue(nextValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [component, entity]);
  return value ?? defaultValue;
}

// src/usePromise.ts
import { useEffect as useEffect4, useRef, useState as useState2 } from "react";
function usePromise(promise) {
  const promiseRef = useRef(promise);
  const [result, setResult] = useState2(
    promise == null ? { status: "idle" } : { status: "pending" }
  );
  useEffect4(() => {
    if (promise !== promiseRef.current) {
      promiseRef.current = promise;
      setResult(
        promise == null ? { status: "idle" } : { status: "pending" }
      );
    }
  }, [promise]);
  useEffect4(() => {
    if (promise == null)
      return;
    Promise.allSettled([promise]).then(([settled]) => {
      if (promise === promiseRef.current) {
        setResult(settled);
      }
    });
  }, [promise]);
  return result;
}

// src/syncManager/createSyncManager.ts
import { setComponent as setComponent3 } from "@dojoengine/recs";
import { getEntityIdFromKeys as getEntityIdFromKeys3 } from "@dojoengine/utils";
async function fetchAndSetModelValue(client, modelEntry) {
  const { model, keys } = modelEntry;
  try {
    setComponent3(
      model,
      getEntityIdFromKeys3(keys),
      convertValues(
        model.schema,
        await client.getModelValue(
          model.metadata?.name,
          keys.map((key) => key.toString())
        )
      )
    );
  } catch (error) {
    console.error("Failed to fetch or set model value:", error);
  }
}
function createSyncManager(client, modelEntries) {
  function sync() {
    modelEntries.forEach((modelEntry) => {
      fetchAndSetModelValue(client, modelEntry);
      client.addEntitiesToSync([
        {
          model: modelEntry.model.metadata?.name,
          keys: modelEntry.keys.map((k) => k.toString())
        }
      ]);
      client.onSyncEntityChange(
        {
          model: modelEntry.model.metadata?.name,
          keys: modelEntry.keys.map((k) => k.toString())
        },
        () => {
          client.getModelValue(
            modelEntry.model.metadata?.name,
            modelEntry.keys.map((k) => k.toString())
          ).then((modelValue) => {
            setComponent3(
              modelEntry.model,
              getEntityIdFromKeys3(modelEntry.keys),
              convertValues(
                modelEntry.model.schema,
                modelValue
              )
            );
          });
        }
      );
    });
  }
  function cleanup() {
    modelEntries.forEach((modelEntry) => {
      client.removeEntitiesToSync([
        {
          model: modelEntry.model.metadata?.name,
          keys: modelEntry.keys.map((k) => k.toString())
        }
      ]).catch((error) => {
        console.error(
          "Failed to remove entities on cleanup",
          error
        );
      });
    });
  }
  return { cleanup, sync };
}

// src/useEntityQuery.ts
import { defineQuery as defineQuery2 } from "@dojoengine/recs";
import { useEffect as useEffect6, useMemo as useMemo2, useState as useState4 } from "react";

// src/utils/useDeepMemo.ts
import { useEffect as useEffect5, useState as useState3 } from "react";
import isEqual from "fast-deep-equal";
var useDeepMemo = (currentValue) => {
  const [stableValue, setStableValue] = useState3(currentValue);
  useEffect5(() => {
    if (!isEqual(currentValue, stableValue)) {
      setStableValue(currentValue);
    }
  }, [currentValue]);
  return stableValue;
};

// src/useEntityQuery.ts
import isEqual2 from "fast-deep-equal";
import { distinctUntilChanged, map } from "rxjs";
function useEntityQuery(fragments, options) {
  const updateOnValueChange = options?.updateOnValueChange ?? true;
  const stableFragments = useDeepMemo(fragments);
  const query = useMemo2(
    () => defineQuery2(stableFragments, { runOnInit: true }),
    [stableFragments]
  );
  const [entities, setEntities] = useState4([...query.matching]);
  useEffect6(() => {
    setEntities([...query.matching]);
    let observable = query.update$.pipe(map(() => [...query.matching]));
    if (!updateOnValueChange) {
      observable = observable.pipe(
        distinctUntilChanged((a, b) => isEqual2(a, b))
      );
    }
    const subscription = observable.subscribe(
      (entities2) => setEntities(entities2)
    );
    return () => subscription.unsubscribe();
  }, [query, updateOnValueChange]);
  return entities;
}

// src/useSyncWorld.ts
import {
  setComponent as setComponent4
} from "@dojoengine/recs";
import { useEffect as useEffect7 } from "react";
function useSyncWorld(client, components) {
  useEffect7(() => {
    getEntities(client, components);
  }, [client]);
}
var getEntities = async (client, components) => {
  let cursor = 0;
  let continueFetching = true;
  while (continueFetching) {
    let entities = await client.getEntities(100, cursor);
    for (let key in entities) {
      if (entities.hasOwnProperty(key)) {
        for (let componentName in entities[key]) {
          if (entities[key].hasOwnProperty(componentName)) {
            let recsComponent = components[componentName];
            if (recsComponent) {
              setComponent4(
                recsComponent,
                key,
                convertValues(
                  recsComponent.schema,
                  entities[key][componentName]
                )
              );
            }
          }
        }
      }
    }
    if (Object.keys(entities).length < 100) {
      continueFetching = false;
    } else {
      cursor += 100;
    }
  }
};
export {
  convertValues,
  createSyncManager,
  getEntities,
  useComponentValue,
  useEntityQuery,
  usePromise,
  useSubscribeEntityModel,
  useSync,
  useSyncWorld
};
//# sourceMappingURL=index.js.map