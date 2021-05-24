import { combineReducers, createStore } from "redux";
import patientLogAction from "./state/PatientLogAction/reducer";
import doctorLogAction from "./state/DoctorLogAction/reducer";
import toggleTimeKeeper from "./state/TimePicker/reducer";

const reducer = combineReducers({
  patientLogAction,
  doctorLogAction,
  toggleTimeKeeper,
});

const store = createStore(reducer);

export default store;
