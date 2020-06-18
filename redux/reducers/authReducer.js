import { AUTHENTICATE, DEAUTHENTICATE, USER } from "../types";
import initialState from "./initialState";

export default (state = initialState.authentication, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, { token: action.payload });
    case USER:
      return Object.assign({}, state, { user: action.payload });
    case DEAUTHENTICATE:
      return { token: null };
    default:
      return state;
  }
};
