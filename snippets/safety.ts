export type Dispatch = ThunkDispatch<
  FullStore,
  {},
  AllActions
>;
export interface Store
  extends ReduxStore<FullStore, AllActions> {
  dispatch: Dispatch;
}

// Part of AllActions, works.
dispatch({type: GifActionTypes.FetchGifs});

// TYPE ERROR
dispatch({type: "BAD_ACTION"});

function selectState(state: FullStore) {
  // GIPHY is a valid namespace
  const gifs = state["GIPHY"];
  // TYPE ERROR
  const invalid = state["INVALID"];
}

type FetchGifs = {
  type: GifActionTypes.FetchGifs;
  payload: {gifs: GiphyImage[]};
};

function reducer(
  state: FullStore[GIPHY],
  action: AllActions
) {
  switch (action.type) {
    case GifActionTypes.FetchGifs: {
      return {
        ...state,
        // We know the shape of payload so this works.
        ...action.payload.gifs,
        // TYPE ERROR
        ...action.payload.invalid
      };
    }
  }
}
