import * as types from "../types";
import axios from "axios";
//import * as courseApi from "../../api/courseApi";
//import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadComicsSuccess(comics) {
  return { type: types.LOAD_COMICS_SUCCESS, comics };
}

export function loadComics() {
  return function (dispatch) {
    return axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters/1009726/comics?orderBy=modified&limit=5&apikey=3e5f7eefe2c568a3695b5c6e58b13a3c"
      )
      .then((response) => {
        console.log(response);
        dispatch(loadComicsSuccess(response.data.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
