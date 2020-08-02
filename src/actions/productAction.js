export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const CognitiveServicesCredentials = require("ms-rest-azure")
  .CognitiveServicesCredentials;
const WebSearchAPIClient = require("azure-cognitiveservices-websearch");
const BingSearchApi_AccessKey = "9051f52e0da947e2b0dde6cee97cbbe9";
const credentials = new CognitiveServicesCredentials(BingSearchApi_AccessKey);

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = results => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { results }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts(query = "Hedwig") {
  return dispatch => {
    dispatch(fetchProductsBegin());
    let webSearchApiClient = new WebSearchAPIClient(credentials);
    webSearchApiClient.web
      .search(query)
      .then(result => {
        dispatch(fetchProductsSuccess(result["webPages"].value));
      })
      .catch(err => dispatch(fetchProductsFailure(err)));
  };
}
