import {GiphyNamespace, GifActionTypes} from "./types";
import {AllActions} from "../../data/types";

const defaultState: GiphyNamespace = {};

export function reducer(
  state: GiphyNamespace = defaultState,
  action: AllActions
): GiphyNamespace {
  const slytherinId = action.slytherinId;
  const prevGifs = state[slytherinId] || [];

  switch (action.type) {
    case GifActionTypes.FetchSuccess: {
      return {
        ...state,
        [slytherinId]: [...prevGifs, ...action.payload]
      };
    }
    case GifActionTypes.FetchError: {
      return {
        ...state,
        [slytherinId]: [...prevGifs]
      };
    }

    case GifActionTypes.FetchRequest:
    default: {
      return state;
    }
  }
}
