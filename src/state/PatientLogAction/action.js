import store from "../../store";

export const LogIn = (data) => {
  store.dispatch({
    type: "LogIn",
    payload: data,
  });
};

export const LogOut = (email) => {
  store.dispatch({
    type: "LogOut",
    payload: email,
  });
};
