import React from 'react';
import './index.scss';

export default function Header() {
    return(
        <div>
            <div class="appbar">
                <div class="header">
                    THE REMOTE DOCTOR
                </div>
                <div class="options">
                    <span>Home</span>
                    <span>Support</span>
                    <span>Features</span>
                    <span>Signup</span>
                    <span>SignIn</span>
                </div>
            </div>
        </div>
    );
}