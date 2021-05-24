export const fetchAppointments = async (id) => {
  const url = "http://localhost:4000/fetchAppointments/" + 6;

  const res = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return res;
};

export const updatePatientTime = (time, id) => {
  const url = "http://localhost:4000/updatePatientTime/" + time + "/" + id;

  fetch(url, {
    method: "PUT", // or 'PUT'
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log("Success");
    })
    .catch((error) => console.error("Error:", error));
};

export const fetchScheduledAppointments = (id) => {
  const url = "http://localhost:4000/fetchScheduledAppointments/" + 6;

  const res = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch((err) => console.log(err));

  return res;
}