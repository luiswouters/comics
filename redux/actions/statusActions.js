import * as types from "../types";
import axios from "axios";
import initialState from "../reducers/initialState";

export function cleanStatus() {
  return { type: types.STATUS_HIDE, message: initialState.status };
}

export function statusShow(message) {
  return { type: types.STATUS_SHOW, message };
}
