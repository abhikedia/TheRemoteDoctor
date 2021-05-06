import React from 'react';
import Header from '../Header/index';
import Card from '../Cards/index';
import Image from '../../assets/images/image_link';
import Graph from '../utils/line_chart';
import './index.scss';

export default function Records() {
    return (
        <div>
            <Header />
            <div>
                <div class="records-header">
                    <h1>Updates</h1>
                </div>
                <div class="records-card">
                    <div class="records-card-1">
                        <Card
                            title="Number of Hospitals"
                            count="23"
                            link={Image}
                        />
                    </div>
                    <div class="records-card-2">
                        <Card
                            title="Appointments taken today"
                            count="38"
                            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtzhPPeX8eer5G4gbciWzDlA1RfsCCyYkw&usqp=CAU"
                        />
                    </div>
                    <div class="records-card-3">
                        <Card
                            title="Total number of Appointments"
                            count="238"
                            link="https://alliedhealth.uconn.edu/wp-content/uploads/sites/2408/2018/06/advising_appointments.jpg"
                        />
                    </div>
                </div>
                <div class="records-header">
                    <h1>Graphs</h1>
                </div>
                <div class="records-graph">
                    <div class="records-graph-1">
                        <Graph />
                    </div>
                    <div class="records-graph-2">
                        <Graph />
                    </div>
                </div>
            </div>
        </div>
    );
}