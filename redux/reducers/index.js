import { combineReducers } from "redux";
import authReducer from "./authReducer";
import comics from "./comicsReducer";
import status from "./statusReducer";

const reducers = combineReducers({
  authentication: authReducer,
  comics,
  status,
});

export default reducers;
