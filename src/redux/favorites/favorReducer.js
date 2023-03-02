const initialState = {
  selectedItems: [],
  itemsCounter: 0,
};

const sumItems = (state) => {
  const itemsCounter = state.reduce((total, item) => total + item.quantity, 0);
  return { itemsCounter };
};

const favorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAVOR":
      if (!state.selectedItems.find((item) => item.id === payload.id)) {
        state.selectedItems.push({ ...payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItems: state.selectedItems,
        ...sumItems(state.selectedItems),
      };

    case "REMOVE_FAVOR":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== payload.id
      );
      return {
        ...state,
        selectedItems: newSelectedItems,
        ...sumItems(newSelectedItems),
      };

    case "CLEAR_FAVOR":
      return { selectedItems: [], itemsCounter: 0 };

    default:
      return state;
  }
};

export default favorReducer;
