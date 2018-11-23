// import jsonResponse from "./bookmarkData.json";

function getLinks() {
  // console.log(jsonResponse);
  return fetch("http://localhost:1234/bookmarkData.json")
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchLinks() {
  return dispatch => {
    dispatch(fetchLinksBegin());
    return getLinks()
      .then(json => {
        console.log("fetch links ", fetchLinksSuccess(json));
        dispatch(fetchLinksSuccess(json));
        console.log("json ", json.children);
        return json.children;
      })
      .catch(error => dispatch(fetchLinksFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_LINKS_BEGIN = "FETCH_LINKS_BEGIN";
export const FETCH_LINKS_SUCCESS = "FETCH_LINKS_SUCCESS";
export const FETCH_LINKS_FAILURE = "FETCH_LINKS_FAILURE";

export const fetchLinksBegin = () => ({
  type: FETCH_LINKS_BEGIN
});

export const fetchLinksSuccess = links => ({
  type: FETCH_LINKS_SUCCESS,
  payload: { links }
});

export const fetchLinksFailure = error => ({
  type: FETCH_LINKS_FAILURE,
  payload: { error }
});
