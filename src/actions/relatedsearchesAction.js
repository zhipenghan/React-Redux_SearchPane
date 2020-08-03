export const FETCH_RELATED_BEGIN = "FETCH_RELATED_BEGIN";
export const FETCH_RELATED_SUCCESS = "FETCH_RELATED_SUCCESS";
export const FETCH_RELATED_FAILURE = "FETCH_RELATED_FAILURE";
export const CLICK_RELATED_SEARCHES = "CLICK_RELATED_SEARCHES";

const CognitiveServicesCredentials = require("ms-rest-azure")
  .CognitiveServicesCredentials;
const WebSearchAPIClient = require("azure-cognitiveservices-websearch");
const BingSearchApi_AccessKey = "9051f52e0da947e2b0dde6cee97cbbe9";
const credentials = new CognitiveServicesCredentials(BingSearchApi_AccessKey);

export const fetchRelatedBegin = () => ({
  type: FETCH_RELATED_BEGIN
});

export const fetchRelatedSuccess = results => ({
  type: FETCH_RELATED_SUCCESS,
  payload: { results }
});

export const fetchRelatedFailure = error => ({
  type: FETCH_RELATED_FAILURE,
  payload: { error }
});

export const clickRelatedSearch = query_value => ({
  type: CLICK_RELATED_SEARCHES,
  payload: { query_value }
});

export function fetchRelated(query = "Hedwig") {
  return dispatch => {
    dispatch(fetchRelatedBegin());
    let url =
      "https://www.bingapis.com/api/v7/suggestions?q=" +
      query +
      "&AppID=E1FB6085899219CFB7F44E35A3FE49A00C4D6480";
    return fetch(url)
      .then(res => res.json())
      .then(result => {
        dispatch(
          fetchRelatedSuccess(
            result["suggestionGroups"][0]["searchSuggestions"]
          )
        );
      })
      .catch(err => dispatch(fetchRelatedFailure(err)));
  };
}
