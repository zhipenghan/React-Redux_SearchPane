import { combineReducers } from "redux";
import products from "./reducers/productReducer";
import counter from "./reducers/counterReducer";
import searchbox from "./reducers/searchboxReducer";

export default combineReducers({
  products,
  counter,
  searchbox
});
