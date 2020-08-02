export const SEARCH_CLICK = "SEARCH_CLICK";

export const searchUpdate = query_value => ({
  type: SEARCH_CLICK,
  payload: { query_value }
});
