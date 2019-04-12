import {StoreShape, FullStore, NamespaceKey} from "./types";

export function getStateAtNamespace<K extends NamespaceKey>(
  state: StoreShape,
  key: K
): FullStore[K] {
  const slice: FullStore[K] | undefined = state[key];

  if (!slice) {
    throw new Error(`${key} is not a registered namespace`);
  }

  return slice;
}
