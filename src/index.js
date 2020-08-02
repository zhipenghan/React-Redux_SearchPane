import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";

import ProductList from "./ProductList";
import SearchBox from "./Searchbox";
import Counter from "./Counter";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Counter />
    <SearchBox />
    <ProductList />
  </Provider>
);

render(<App />, document.getElementById("root"));
