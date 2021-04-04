import React from 'react';
import Header from '../Header/index';
import Image from '../../assets/images/appointment.jpg';
import TextField from '@material-ui/core/TextField';
import './index.scss';
import { Button } from '@material-ui/core';

export default function TrackAppointment() {
    return (
        <div>
            <Header />
            <div class="track-header">
                <h1>Track Your Appointment</h1>
            </div>
            <div class="track-main">
                <div class="track-img">
                    <img src={Image} alt="Appointment Image" width="100%" height="60%" />
                </div>
                <div class="track-form">
                    <div class="track-form-header">
                        <h2>Login for Appointment Tracking...</h2>
                    </div>
                    <div class="track-body">
                        <div>
                            <span>Enter Appointment ID:</span>
                            <span><TextField /></span>
                        </div>
                        <br /><br />
                        <div>
                            <span>Enter Captcha: </span>
                            <span><TextField /></span>
                            <span>Captcha</span>
                        </div>
                        <div class="track-button">
                            <Button>Proceed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}