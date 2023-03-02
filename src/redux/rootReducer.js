import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";
import favorReducer from "./favorites/favorReducer";

const rootReducer = combineReducers({
  cartState: cartReducer,
  favorState: favorReducer,
});

export default rootReducer;
