import { combineReducers, createStore, applyMiddleware } from "redux";
import patientLogAction from "./state/PatientLogAction/reducer";
import doctorLogAction from "./state/DoctorLogAction/reducer";
// import reduxLogger from 'redux-logger';
// import logger from 'redux-logger';
import thunk from "redux-thunk";
// import logger from "small-redux-logger";
import Immutable from 'immutable';
import { createLogger } from 'redux-logger'
import toggleTimeKeeper from "./state/TimePicker/reducer";

// // const reduxLogger = require("redux-logger");
// const logger = {
//   // logErrors : true,
//   logActions: true, // will log redux actions
//   logState: true, // will log redux state
// };

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};
 
    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };
 
    return newState;
  }
});

const reducer = combineReducers({
  patientLogAction,
  doctorLogAction,
  toggleTimeKeeper,
});

// const myLogger = (store) => (next) => (action) => {
//   next(action);
// };

const store = createStore(reducer);

console.log(store.getState())
export default store;
