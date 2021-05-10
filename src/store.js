import { combineReducers, createStore } from "redux";
import patientLogAction from "./state/PatientLogAction/reducer";
import doctorLogAction from "./state/DoctorLogAction/reducer";

const reducer = combineReducers({
  patientLogAction,
  doctorLogAction,
});

const store = createStore(reducer);
export default store;
