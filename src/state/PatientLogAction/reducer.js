const initialState = {
  id: "",
  email: "",
  name: "",
  gender: "",
  phone: "",
  avatar: "",
  dob: "",
  height: "",
  weight: "",
  blood: "",
  account: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LogIn":
      const data = action.payload;
      state.id = data.id;
      state.email = data.email;
      state.name = data.name;
      state.gender = data.gender;
      state.phone = data.phone;
      state.avatar = data.avatar;
      state.dob = data.dob;
      state.weight = data.weight;
      state.height = data.height;
      state.blood = data.blood;
      state.account = data.account;
      break;

    case "LogOut":
      break;

    default:
      break;
  }
  return state;
}
