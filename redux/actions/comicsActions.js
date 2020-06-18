import * as types from "../types";
import axios from "axios";
import initialState from "../reducers/initialState";

export function loadComicsSuccess(comics) {
  return { type: types.LOAD_COMICS_SUCCESS, comics };
}

export function unloadComicsSuccess() {
  return { type: types.LOAD_COMICS_SUCCESS, comics: initialState.comics };
}

export function unloadComics() {
  return function (dispatch) {
    return dispatch(unloadComicsSuccess);
  };
}

export function loadComics(characterId) {
  return function (dispatch) {
    return axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=modified&limit=5&apikey=3e5f7eefe2c568a3695b5c6e58b13a3c`
      )
      .then((response) => {
        const comics = [];
        dispatch(loadComicsSuccess(response.data.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
