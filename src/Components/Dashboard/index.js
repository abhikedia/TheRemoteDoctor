import React from 'react';
import { Button } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import './index.scss';

export default function Dashboard() {
    return (
        <div className="dashboard-main">
            <div className="dashboard-sidepane-left">
                <div className="dashboard-header">
                    The Remote Doctor
                </div>
                <hr className="dashboard-line" />
                <div className="dashboard-options">
                    <div>
                        <AllInclusiveIcon fontSize="large" />
                        <Button className="dashboard-buttons">Overview</Button>
                    </div>
                    <div>
                        <ApartmentIcon />
                        <Button className="dashboard-buttons">New Appointment</Button>
                    </div>
                    <div>
                        <TrackChangesIcon />
                        <Button className="dashboard-buttons">Track Appointment</Button>
                    </div>
                    <div>
                        <AssessmentIcon />
                        <Button className="dashboard-buttons">Lab Reports</Button>
                    </div>
                    <div>
                        <HistoryIcon />
                        <Button className="dashboard-buttons">History</Button>
                    </div>
                    <div className="dashboard-logout">
                        <ExitToAppIcon />
                        <Button className="dashboard-buttons">LogOut</Button>
                    </div>
                </div>
            </div>
            <div className="dashboard-mainportal">
                <div className="dashboard-user">
                    <div className="dashboard-user-profile">
                        abcd
                    </div>
                    <div>

                    </div>
                </div>
                <div className="dashboard-chart">
                    s
                </div>
            </div>
            <div className="dashboard-sidepane-right">
                pp
            </div>
        </div>
    );
}