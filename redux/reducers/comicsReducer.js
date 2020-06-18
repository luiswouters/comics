import * as types from "../types";
import initialState from "./initialState";

export default function comicsReducer(state = initialState.comics, action) {
  switch (action.type) {
    case types.LOAD_COMICS_SUCCESS:
      return action.comics;
    case types.UNLOAD_COMICS_SUCCESS:
      return [];
    default:
      return state;
  }
}
