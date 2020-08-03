import { SEARCH_CLICK } from "../actions/searchboxAction";

const initialState = {
    query_value: "hedwig"
};

export default function productReducer(state = initialState, action) {
    console.log("searchbox Reducer", state, action);
    switch (action.type) {
        case SEARCH_CLICK:
            return {
                ...state,
                query_value: action.payload.query_value
            };
        default:
            return state;
    }
}
