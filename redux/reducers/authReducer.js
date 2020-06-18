import * as types from "../types";
import initialState from "./initialState";

export default function authReducer(
  state = initialState.authentication,
  action
) {
  switch (action.type) {
    case types.TRY_AUTHENTICATE_SUCCESS:
      return action.user;
    case types.LOGOUT_SUCCESS:
      console.log(action.user);
      return null;
    default:
      return state;
  }
}
