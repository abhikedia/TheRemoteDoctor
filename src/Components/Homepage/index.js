import React from 'react';
import Header from '../Header/index';
import Background from '../../assets/images/main_background.jpg';
import './index.css';

export default function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <div class="main-body">
                <img src={Background} class="background-image" alt=''/>
            </div>
            <div class="footer">
                <div class="footer-text">
                    Everything has moved online, why not Hospitals and Healthcare?
                    </div>
                <div class="footer-buttons">
                    <span>On-Boarding Manual</span>
                    <span>Hospital Login</span>
                </div>
            </div>
        </div>
    );
}