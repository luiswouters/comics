import { combineReducers } from "redux";
import authReducer from "./authReducer";
import comics from "./comicsReducer";

const reducers = combineReducers({
  authentication: authReducer,
  comics,
});

export default reducers;
