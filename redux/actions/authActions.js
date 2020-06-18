import * as types from "../types";
import axios from "axios";

export function tryAuthenticateSuccess(user) {
  return { type: types.TRY_AUTHENTICATE_SUCCESS, user };
}

export function tryAuthenticateError(user) {
  return { type: types.TRY_AUTHENTICATE_ERROR };
}

export function logoutSuccess() {
  console.log("bom");
  return { type: types.LOGOUT_SUCCESS, user: {} };
}

export function logout() {
  return function (dispatch) {
    return dispatch(logoutSuccess());
  };
}

export function tryAuthenticate(credentials) {
  return function (dispatch) {
    console.log(credentials.email);
    return axios
      .get("/users.json")
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.email === credentials.email &&
            user.password.toString() === credentials.password
        );
        if (user !== undefined) {
          dispatch(tryAuthenticateSuccess(user));
        } else {
          dispatch(tryAuthenticateError(response.data.data.results));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
