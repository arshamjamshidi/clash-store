const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (state) => {
  const itemsCounter = state.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = state.reduce((total, product) => total + product.price, 0);

  return { itemsCounter, total };
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === payload.id)) {
        state.selectedItems.push({ ...payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItems: state.selectedItems,
        ...sumItems(state.selectedItems),
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== payload.id
      );
      return {
        ...state,
        selectedItems: newSelectedItems,
        ...sumItems(newSelectedItems),
      };

    case "CHECKOUT":
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: true };

    case "CLEAR":
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: false };

    default:
      return state;
  }
};

export default cartReducer;
