import states from "../utils/states";
import city from "../utils/cities";

export const displayStateList = () => {
  let state = [];
  states.map((states, index) => {
    state.push(
      <option value={states.name} key={states.key}>
        {states.name}
      </option>
    );
    return "";
  });
  return state;
};

export const displayCities = (stateSelected) => {
  const cities = [];
  city.map((city) => {
    if (city.state === stateSelected)
      cities.push(<option value={city.name}>{city.name}</option>);
    return "";
  });
  return cities;
};

export const departments = () => {
  let departments = [];
  const url = "http://localhost:4000/getDepartments/";
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < response.length; i++)
        departments.push(
          <option value={response[i].deptid}>{response[i].name}</option>
        );
    })
    .catch((err) => console.log(err));
  return departments;
};

export const hospitals = (state, city) => {
  let hosp = [];
  const url = "http://localhost:4000/getHospitals/" + state + "/" + city;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < response.length; i++)
        hosp.push(
          <option value={response[i].hospitalid}>{response[i].name}</option>
        );
    })
    .catch((err) => console.log(err));
  return hosp;
};

export const doctors = (hospital, citySelected, dept) => {
  let doc = [];
  let temp = hospital !== "" ? hospital : "none";

  var url =
    "http://localhost:4000/getDoctors/" +
    citySelected +
    "/" +
    dept +
    "/" +
    temp;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      for (var i = 0; i < response.length; i++)
        doc.push(
          <option value={response[i].doctorid}>
            {response[i].name + "Fees:" + response[i].fees}
          </option>
        );
    })
    .catch((err) => console.log(err));
  return doc;
};

export const createAppointment = (data) => {
  const url = "http://localhost:4000/createAppointment";
  fetch(url, {
    method: "POST", // or 'PUT'
    mode: "cors",
    body: data, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.body)
    .then((response) => {
      console.log("Success");
    })
    .catch((error) => console.error("Error:", error));
};
