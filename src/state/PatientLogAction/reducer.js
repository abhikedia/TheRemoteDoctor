const initialState = {
  id: "",
  email: "",
  name: "",
  gender: "",
  phone: "",
  avatar: "",
  dob: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LogIn":
      const data = action.payload;
      state.id = data.patient_id;
      state.email = data.email;
      state.name = data.name;
      state.gender = data.gender;
      state.phone = data.phone;
      state.avatar = data.avatar;
      state.dob = data.dob;
      break;

    case "LogOut":
      break;

    default:
      break;
  }
  return state;
}
