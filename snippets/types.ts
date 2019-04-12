import {Reducer, Store as ReduxStore} from "redux";
import {ThunkDispatch} from "redux-thunk";

import {
  GiphyNamespace, // Giphy Namespace Shape
  GifActionTypes, // Action Type Enums
  GifActions // Action Objects
} from "../giphy/data/types";
import {
  MoviesNamespace,
  MovieActionTypes,
  MovieActions
} from "../movies/data/types";
import {
  PodcastsNamespace,
  PodcastActionTypes,
  PodcastActions
} from "../podcasts/data/types";
import {
  TwitterActions,
  TwitterActionTypes,
  TwitterNamespace
} from "../twitter/data/types";
import {
  RssNamespace,
  RssActions,
  RssActionTypes
} from "../rss/data/types";
import {
  YoutubeNamespace,
  YoutubeActions,
  YoutubeActionTypes
} from "../youtube/data/types";

// Reducer Namespace Keys
export const GIPHY = "GIPHY";
export const MOVIES = "MOVIES";
export const RSS = "RSS";
export const PODCAST = "PODCAST";
export const TWITTER = "TWITTER";
export const YOUTUBE = "YOUTUBE";

export type FullStore = {
  [GIPHY]: GiphyNamespace;
  [MOVIES]: MoviesNamespace;
  [RSS]: RssNamespace;
  [PODCAST]: PodcastsNamespace;
  [TWITTER]: TwitterNamespace;
  [YOUTUBE]: YoutubeNamespace;
};
export type StoreShape = Partial<FullStore>;

export type NamespaceKey = keyof StoreShape;
export type ReducersMapObject = {
  [k in NamespaceKey]?: Reducer<StoreShape[k], AllActions>
};
export type Dispatch = ThunkDispatch<
  StoreShape,
  {},
  AllActions
>;
export interface Store
  extends ReduxStore<StoreShape, AllActions> {
  dispatch: Dispatch;
}
export type GetState = () => StoreShape;

// Action Type Enums
export type AllActionTypes =
  | GifActionTypes
  | MovieActionTypes
  | PodcastActionTypes
  | RssActionTypes
  | TwitterActionTypes
  | YoutubeActionTypes;

// Action Object Shapes
export type AllActions =
  | GifActions
  | MovieActions
  | PodcastActions
  | RssActions
  | TwitterActions
  | YoutubeActions;

export type SlytherinStandardAction = {
  type: AllActionTypes;
  slytherinId: number;
  payload?: {};
  error?: Error;
};

export type FetchParams = {
  slytherinId: number;
};

export type Fetcher = (
  params: FetchParams
) => (dispatch: Dispatch, getState: GetState) => any;
