export type GiphyNamespace = {
  [slytherinId: number]: GiphyImage[];
};

export enum GifActionTypes {
  FetchRequest = "GIFS/FETCH_REQUEST",
  FetchSuccess = "GIFS/FETCH_SUCCESS",
  FetchError = "GIFS/FETCH_ERROR"
}

export interface FetchGifRequest
  extends SlytherinStandardAction {
  type: GifActionTypes.FetchRequest;
}

export interface FetchGifSuccess
  extends SlytherinStandardAction {
  type: GifActionTypes.FetchSuccess;
  payload: GiphyImage[];
}

export interface FetchGifError
  extends SlytherinStandardAction {
  type: GifActionTypes.FetchError;
  error: Error;
}

export type GifActions =
  | FetchGifRequest
  | FetchGifSuccess
  | FetchGifError;
