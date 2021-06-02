export const OpenModal = (id, appointment) => {
  return {
    type: "OpenModal",
    payload: { id, appointment },
  };
};

export const closeModal = () => {
  return {
    type: "CloseModal",
  };
};
