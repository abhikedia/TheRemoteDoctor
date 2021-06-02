import React, { useEffect, useState } from "react";
import Card from "../Cards/index";
import Image from "../../assets/images/image_link";
import { getDoctors, getAppointments, getTotalAppointments } from "./apiCalls";
import "./index.scss";

export default function Records() {
  const [doctors, setDoctors] = useState(0);
  const [today, setToday] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getDoctors().then((res) => setDoctors(res[0]["COUNT(*)"]));
    getAppointments().then((res) => setToday(res[0]["COUNT(*)"]));
    getTotalAppointments().then((res) => setTotal(res[0]["COUNT(*)"]));
  }, []);

  return (
    <div id="records-main">
      <div class="records-card">
        <div class="records-card-1">
          <Card
            title="Number of Hospitals/Doctors"
            count={doctors}
            link={Image}
          />
        </div>
        <div class="records-card-2">
          <Card
            title="Appointments taken today"
            count={today}
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtzhPPeX8eer5G4gbciWzDlA1RfsCCyYkw&usqp=CAU"
          />
        </div>
        <div class="records-card-3">
          <Card
            title="Total number of Appointments"
            count={total}
            link="https://alliedhealth.uconn.edu/wp-content/uploads/sites/2408/2018/06/advising_appointments.jpg"
          />
        </div>
      </div>
    </div>
  );
}
