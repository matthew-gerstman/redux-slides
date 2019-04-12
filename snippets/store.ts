let internalStore: Store;
let internalReducers: ReducersMapObject = {};

function constructStore(
  reducers: ReducersMapObject
): Store {
  const reducer = combineReducers<StoreShape>(
    reducers as ReduxReducersMapObject
  );

  return createStore(
    reducer,
    composeEnhancersWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  );
}
function registerReducers(reducers: ReducersMapObject) {
  const newReducers: ReducersMapObject = sanitizeUnregisteredReducers(
    reducers
  );

  internalReducers = {
    ...internalReducers,
    ...newReducers
  };

  internalStore.replaceReducer(
    combineReducers(
      internalReducers as ReduxReducersMapObject
    )
  );
}
export function getStoreAndRegisterReducers(
  reducers: ReducersMapObject
): Store {
  if (internalStore != null) {
    registerReducers(reducers);
    return internalStore;
  }

  internalStore = constructStore(reducers);
  internalReducers = reducers;

  return internalStore;
}
