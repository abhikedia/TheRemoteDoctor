import React, { useState } from 'react';
import Header from '../Header/index';
import Image from '../../assets/images/appointment.jpg';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import './index.scss';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        
    }

    return (
        <div>
            <Header />
            <div class="track-header">
                <h1>Proceed Only if You are already Registered.</h1>
            </div>
            <div class="track-main">
                <div class="track-img">
                    <img src={Image} alt="Appointment Image" width="100%" height="60%" />
                </div>
                <div class="track-form">
                    <div class="track-body">
                        <div>
                            <span>Email:</span>
                            <span><TextField onChange={(event) => setEmail(event.target.value)} /></span>
                        </div>
                        <br /><br />
                        <div>
                            <span>Password: </span>
                            <span><TextField onChange={(event) => setPassword(event.target.value)} /></span>
                        </div>
                        <div class="track-button">
                            <Button onClick={()=>onSubmit()}>Proceed</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}