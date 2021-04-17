import React from 'react';
import Homepage from './Components/Homepage/index';
import Login from './Components/Login/index';
import Signup from './Components/Signup/index';
// import Dashboard from './Components/Dashboard/index';
import Records from './Components/Records/index';
import Appointment from './Components/Appointment/index';
import TrackAppointment from './Components/TrackAppointment/index';
import { Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/records" component={Records} />
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/appointment" component={Appointment} />
                <Route path="/trackappointment" component={TrackAppointment} />
            </Switch>
        </main>
    );
}