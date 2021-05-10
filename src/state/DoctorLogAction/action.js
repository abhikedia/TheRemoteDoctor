import store from "../../store";

export const doctorLogIn = (data) => {
  store.dispatch({
    type: "LogIn",
    payload: data,
  });
};

export const doctorLogOut = (email) => {
  store.dispatch({
    type: "LogOut",
    payload: email,
  });
};
