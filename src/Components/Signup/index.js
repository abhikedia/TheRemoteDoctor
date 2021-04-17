import React from 'react';
import Header from '../Header/index';
import { Button, Avatar } from '@material-ui/core';
import Background from '../../assets/images/avatar.png';
import TextField from '@material-ui/core/TextField';
import './index.scss';

export default function TrackAppointment() {
    return (
        <div>
            <Header />
            <div className="signup-main">
                <div className="signup-header">
                    <h2>Hey, We are glad you are here!&nbsp; Please SignUp to continue.</h2>
                </div>
                <div className="signup-col">
                    <div className="signup-col-1">
                        <Avatar alt="Display Picture" variant='square' src={Background} className="signup-avatar"/>
                        <Button variant="contained">Choose Image</Button>
                    </div>
                    <div className="signup-col-2">
                        <div className="signup-form">
                            <div><TextField
                                label="Name"
                                color="secondary"
                                required={true}
                                autoFocus={true}
                                fullWidth={true}
                            /></div>
                            <div><TextField
                                label="Date of Birth"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                // type='Date'
                            /></div>
                            <div><TextField
                                label="Gender"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                            /></div>
                            <div><TextField
                                label="Phone Number"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                            /></div>
                            <div><TextField
                                label="Email"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                            /></div>
                            <div><TextField
                                label="Password"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                            /></div>
                            <div><TextField
                                label="Confirm Password"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                            /></div>
                        </div>
                    </div>
                </div>
                <div className="signup-button">
                    <Button color="secondary" variant="contained" size="large">Signup</Button>
                </div>
            </div>
        </div>
    );
}