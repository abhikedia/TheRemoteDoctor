import React from 'react';
import Header from '../Header/index';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './index.scss';

export default function Login() {
    const steps = [
        '1. Choose State',
        '2. Choose Hospital',
        '3. Select date of Appointment',
        '4. Select Time Slot',
        '5. Verify Mobile Number',
        '6. Go to Payments Section',
        '7. Pay Appointment Fee',
        '8. Get Confirmation SMS'
    ];
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Header />
            <div class="appointment-main">
                <div>
                    <div class="appointment-card1-header">
                        <h2>Need an Appointment?</h2>
                        <h2>Follow the steps below:</h2>
                    </div>
                    <div class="appointment-card1-body">
                        {steps.map((step, index) => (
                            <div key={index}>
                                <h3>{step}</h3>
                            </div>
                        ))}
                    </div>
                    <div class="appointment-card1-header">
                        <h2>Have Queries? Email us at:</h2>
                        <h3 class="appointment-footer">customerhelp@theremotedoctor.in</h3>
                    </div>
                </div>
                <div>
                    <div class="appointment-card2-header">
                        <h2 class="appointment-card2-h2">Book an Appointment</h2>
                    </div>
                    <div class="appointment-card2-body">
                        <div>
                            <span><h3>Select State: </h3></span>
                            <span>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </span>
                        </div>
                        <div>
                            <span><h3>Select Hospital: </h3></span>
                            <span><TextField /></span>
                        </div>
                        <div>
                            <span><h3>Select Department: </h3></span>
                            <span><TextField /></span>
                        </div>
                        <div>
                            <span><h3>Choose Time Slot: </h3></span>
                            <span><TextField /></span>
                        </div>
                        <div>
                            <span><h3>Verify Mobile Number: </h3></span>
                            <span><TextField /></span>
                            <span><Button>Verify</Button></span>
                        </div>
                        <div>
                            <span><Button>Proceed</Button></span>
                            <span><Button>Cancel</Button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}