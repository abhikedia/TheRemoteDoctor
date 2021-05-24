const initialState = {
  id: "",
  modalopen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "OpenModal":
      return {
        modalopen: true,
        id: action.payload,
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
