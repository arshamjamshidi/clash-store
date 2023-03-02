const addFavor = (product) => {
  return { type: "ADD_FAVOR", payload: product };
};

const removeFavor = (product) => {
  return { type: "REMOVE_FAVOR", payload: product };
};

const clearFavor = () => {
  return { type: "CLEAR_FAVOR" };
};

export { addFavor, removeFavor, clearFavor };
