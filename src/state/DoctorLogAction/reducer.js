const initialState = {
  id: "",
  email: "",
  name: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LogIn":
      const data = action.payload;
      state.id = data.id;
      state.email = data.email;
      state.name = data.name;
      break;

    case "LogOut":
      break;

    default:
      break;
  }
  return state;
}
