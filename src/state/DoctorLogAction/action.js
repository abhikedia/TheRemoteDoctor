export const doctorLogIn = (data) => {
  return {
    type: "LogIn",
    payload: data,
  };
};

export const doctorLogOut = (email) => {
  return {
    type: "LogOut",
    payload: email,
  };
};
