import {
    FETCH_RELATED_BEGIN,
    FETCH_RELATED_SUCCESS,
    FETCH_RELATED_FAILURE
} from "../actions/relatedsearchesAction";

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function relatedsearchesReducer(state = initialState, action) {
    console.log("relatedsearches Reducer", state, action);
    switch (action.type) {
        case FETCH_RELATED_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_RELATED_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.results
            };
        case FETCH_RELATED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
}
