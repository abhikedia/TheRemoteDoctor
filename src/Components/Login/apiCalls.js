export const patientAction = (url, props, history) => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (!response.length) {
        return 1;
      }
      let data = {
        id: response[0].patientid,
        email: response[0].email,
        name: response[0].name,
        gender: response[0].gender,
        phone: response[0].phone,
        avatar: response[0].avatar,
        dob: response[0].dob,
        blood: response[0].blood,
        height: response[0].height,
        weight: response[0].weight,
        account: response[0].weight,
      };
      props.logInActionHandler(data);
    })
    .then(
      setTimeout(function () {
        history.push("/dashboard");
      }, 1000)
    )
    .catch((err) => console.log(err));
};

export const doctorAction = (url, props, history) => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (!response.length) {
        return;
      }

      let data = {
        id: response[0].doctorid,
        email: response[0].email,
        name: response[0].name,
      };
      props.doctorLoginActionHandler(data);

      setTimeout(function () {
        history.push("/doctorDashboard");
      }, 1000);
    })
    .catch((err) => console.log(err));
};
