const initialState = {
  displayTimeKeeper: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "showClock":
      return {
        // ...state,
        displayTimeKeeper: true,
      };

    case "hideClock":
      return {
        ...state,
        displayTimeKeeper: false,
      };
  }
  return state;
}
