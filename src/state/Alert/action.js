import store from "../../store";

const showAlert = (data) => {
  store.dispatch({
    type: "show",
    payload: data,
  });
};

const hideAlert = (data) => {
  store.dispatch({
    type: "hide",
    payload: data,
  });
};
