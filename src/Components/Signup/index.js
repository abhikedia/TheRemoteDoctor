import React, { useState, useEffect } from 'react';
import Header from '../Header/index';
import { Button, Avatar, Select, InputLabel } from '@material-ui/core';
import Background from '../../assets/images/avatar.png';
import TextField from '@material-ui/core/TextField';
import './index.scss';

export default function SignUp() {
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('Gender');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [avatar, setAvatar] = useState(Background);
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            var url = "http://localhost:4000/getPatientCount";
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    if (response.data.length === 0)
                        setCount(0)
                    else
                        setCount(response.data[0].patientid);
                })
                .catch(err => console.log(err));
        })();
    }, [count]);

    const signUpButton = () => {
        if (name === '' || dob === '' || gender === '' || phone === '' || email === '' || password === '' || confirmPassword === '') {
            setErrorMessage('All the fields are required. Kindly fill before proceeding.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords Mismatch!');
            return;
        }
        var url = "http://localhost:4000/addPatient";
        try {
            fetch(url, {
                method: "POST", // or 'PUT'
                mode: "cors",
                body: JSON.stringify({
                    patientid: count + 1,
                    email: email,
                    name: name,
                    gender: gender.charAt(0),
                    password: password,
                    phone: phone,
                    avatar: avatar,
                    dob: dob
                }), // data can be `string` or {object}!
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.body)
                .then(response => {
                    console.log("Success");
                    setCount(count + 1);
                })
                .catch(error => console.error("Error:", error));
        }
        catch (err) {
            alert('Try Again!')
        }
    }

    return (
        <div>
            <Header />
            <div className="signup-main">
                <div className="signup-header">
                    <h2>Hey, We are glad you are here!&nbsp; Please SignUp to continue.</h2>
                </div>
                <div className="signup-col">
                    <div className="signup-col-1">
                        <Avatar alt="Display Picture" variant='square' src={avatar} className="signup-avatar" />
                        <input className="signup-input" type="file" id="img" name="img" accept="image/*"
                            onChange={(event) => { setAvatar(URL.createObjectURL(event.target.files[0])) }}
                        />
                    </div>
                    <div className="signup-col-2">
                        <div className="signup-form">
                            <div><TextField
                                label="Name"
                                color="secondary"
                                required={true}
                                autoFocus={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setName(event.target.value) }}
                            /></div>
                            <div><TextField
                                label="Date of Birth"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setDOB(event.target.value) }}
                            // type='Date'
                            /></div>
                            <div><InputLabel >Gender</InputLabel>
                                <Select
                                    label="Gender"
                                    fullWidth={true}
                                    color="secondary"
                                    variant="outlined"
                                    placeholder="Gender"
                                    required={true}
                                    onChange={(event) => { setGender(event.target.value) }}
                                >
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Trans'>Trans</option>
                                </Select>
                            </div>
                            <div><TextField
                                label="Phone Number"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setPhone(event.target.value) }}
                            /></div>
                            <div><TextField
                                label="Email"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setEmail(event.target.value) }}
                            /></div>
                            <div><TextField
                                label="Password"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setPassword(event.target.value) }}
                            /></div>
                            <div><TextField
                                label="Confirm Password"
                                color="secondary"
                                required={true}
                                fullWidth={true}
                                variant="outlined"
                                onChange={(event) => { setConfirmPassword(event.target.value) }}
                            /></div>
                            <div className="signup-error">
                                {errorMessage}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup-button">
                    <Button color="secondary" variant="contained" size="large" onClick={() => signUpButton()}>Signup</Button>
                </div>
            </div>
        </div>
    );
}