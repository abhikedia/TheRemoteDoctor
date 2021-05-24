import React from "react";
import Homepage from "./Components/Homepage/index";
import Login from "./Components/Login/index";
import Signup from "./Components/Signup/index";
import patientDashboard from "./Components/Patient Dashboard/index";
import doctorDashboard from "./Components/Doctor Dashboard/index";
import Records from "./Components/Records/index";
import Graph from "./Components/utils/line_chart";
import TrackAppointment from "./Components/TrackAppointment/index";
import { Route, Switch } from "react-router-dom";
import Report from './Components/Report/index'
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <main>
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/records" component={Records} />
          <Route path="/dashboard" component={patientDashboard} />
          <Route path="/graph" component={Graph} />
          <Route path="/doctorDashboard" component={doctorDashboard} />
          <Route path="/trackappointment" component={TrackAppointment} />
          <Route path="/report" component={Report} />
        </Switch>
      </Provider>
    </main>
  );
}
