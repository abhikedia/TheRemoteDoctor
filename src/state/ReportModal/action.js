export const OpenModal = (id) => {
  return {
    type: "OpenModal",
    payload: id,
  };
};

export const closeModal = () => {
  return {
    type: "CloseModal",
  };
};
