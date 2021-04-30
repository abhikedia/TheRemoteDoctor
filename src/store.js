import { combineReducers, createStore } from "redux";
import LogAction from "./state/LogAction/reducer";

const reducer = combineReducers({
  LogAction,
});

const store = createStore(reducer);
export default store;
