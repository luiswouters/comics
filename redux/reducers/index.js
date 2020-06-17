import { combineReducers } from "redux";
import authReducer from "./authReducer";

const reducers = combineReducers({
  authentication: authReducer,
});

export default reducers;
