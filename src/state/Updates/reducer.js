const initialState = {
  updateAppointments: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "updateAppointments":
      return {
        updateAppointments: state.updateAppointments + 1,
      };
  }
  return state;
}
