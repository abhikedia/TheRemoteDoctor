import store from "../../store";

export const showTimeKeeper = (modal_id) => {
  return {
    type: "showClock",
    payload: modal_id,
  };
};

export const hideTimeKeeper = () => {
  return {
    type: "hideClock",
  };
};
