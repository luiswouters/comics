import * as types from "../types";
import initialState from "./initialState";

export default function statusReducer(state = initialState.status, action) {
  switch (action.type) {
    case types.STATUS_SHOW:
      return action.message;
    case types.STATUS_HIDE:
      return action.message;
    default:
      return state;
  }
}
