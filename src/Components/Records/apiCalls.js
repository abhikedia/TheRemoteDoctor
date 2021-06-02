export const getDoctors = () => {
  const url = "http://localhost:4000/getTotalDoctors/";

  const res = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return res;
};

export const getAppointments = () => {
  const url = "http://localhost:4000/getAppointmentsToday/";

  const res = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return res;
};

export const getTotalAppointments = () => {
  const url = "http://localhost:4000/getTotalAppointments/"

  const res = fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return res;
};
