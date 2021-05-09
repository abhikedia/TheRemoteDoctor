import { combineReducers, createStore } from "redux";
import patientLogAction from "./state/PatientLogAction/reducer";

const reducer = combineReducers({
  patientLogAction,
});

const store = createStore(reducer);
export default store;
