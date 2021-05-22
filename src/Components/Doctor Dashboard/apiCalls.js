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
