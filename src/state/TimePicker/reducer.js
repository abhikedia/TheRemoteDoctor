const initialState = {
  displayTimeKeeper: false,
  appointment_number: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "showClock":
      return {
        // ...state,
        displayTimeKeeper: true,
        appointment_number: action.payload,
      };

    case "hideClock":
      return {
        ...state,
        displayTimeKeeper: false,
      };
  }
  return state;
}
