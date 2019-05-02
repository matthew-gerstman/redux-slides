export const GIPHY = "GIPHY";
export type GiphyNamespace = {
  [slytherinId: number]: GiphyImage[];
};

export type FullStore = {
  [GIPHY]: GiphyNamespace;
  [MOVIES]: MoviesNamespace;
  [PODCAST]: PodcastsNamespace;
  [RSS]: RssNamespace;
  [TWITTER]: TwitterNamespace;
  [YOUTUBE]: YoutubeNamespace;
};

type AllActions =
  | FetchGifs
  | FetchMovies
  | FetchPodcasts /* Other Actions */;

function rootReducer(
  state: FullStore,
  action: AllActions
) {
  return {
    [GIPHY]: gifsReducer(state[GIPHY], action)
    /* Other Slices */
  };
}

function gifsReducer(
  state: FullStore[GIPHY],
  action: AllActions
) {
  // reducer body
}

function gifsSelector(state: FullStore) {
  return state[GIPHY];
}
