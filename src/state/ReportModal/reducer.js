const initialState = {
  id: "",
  an: "",
  modalopen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "OpenModal":
      return {
        modalopen: true,
        id: action.payload.id,
        an: action.payload.appointment,
      };
      break;

    case "CloseModal":
      return {
        modalopen: false,
      };
      break;
  }
  return state;
}
