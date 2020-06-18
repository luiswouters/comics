import * as types from "../types";
import axios from "axios";
import { statusShow, cleanStatus } from "./statusActions";

export function tryAuthenticateSuccess(user) {
  return { type: types.TRY_AUTHENTICATE_SUCCESS, user };
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS };
}

export function logout() {
  return function (dispatch) {
    return dispatch(logoutSuccess());
  };
}

export function tryAuthenticate(credentials) {
  return function (dispatch) {
    dispatch(cleanStatus());
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
          dispatch(
            statusShow(
              "We coudn't find your e-mail or the password is incorrect."
            )
          );
        }
      })
      .catch((error) => {
        dispatch(statusShow("We coudn't process your request."));
      });
  };
}
