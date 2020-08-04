import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";

import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";

import ProductList from "./ProductList";
import SearchBoxWrapper from "./SearchboxWrapper";
import RelatedSearchesList from "./RelatedSearches";
//import Counter from "./Counter";

initializeIcons(/* optional base url */);

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        {/* <Counter /> */}
        <SearchBoxWrapper />
        <ProductList />
        <RelatedSearchesList />
    </Provider>
);

render(<App />, document.getElementById("root"));
