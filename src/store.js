import { combineReducers, createStore } from "redux";
import patientLogAction from "./state/PatientLogAction/reducer";
import doctorLogAction from "./state/DoctorLogAction/reducer";
import toggleTimeKeeper from "./state/TimePicker/reducer";
import toggleReportModal from "./state/ReportModal/reducer";
import update from "./state/Updates/reducer";

const reducer = combineReducers({
  patientLogAction,
  doctorLogAction,
  toggleTimeKeeper,
  toggleReportModal,
  update,
});

const store = createStore(reducer);

export default store;
