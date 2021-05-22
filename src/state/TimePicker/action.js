import store from "../../store";

export const showTimeKeeper = () => {
  return {
    type: "showClock",
  };
};

export const hideTimeKeeper = () => {
  return {
    type: "hideClock",
  };
};
