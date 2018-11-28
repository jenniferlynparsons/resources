// export const FETCH_LINKS_BEGIN = "FETCH_LINKS_BEGIN";
// export const FETCH_LINKS_SUCCESS = "FETCH_LINKS_SUCCESS";
// export const FETCH_LINKS_FAILURE = "FETCH_LINKS_FAILURE";

// export const fetchLinksBegin = () => ({
//   type: FETCH_LINKS_BEGIN
// });

// export const fetchLinksSuccess = links => ({
//   type: FETCH_LINKS_SUCCESS,
//   payload: { links }
// });

// export const fetchLinksFailure = error => ({
//   type: FETCH_LINKS_FAILURE,
//   payload: { error }
// });

interface FilterLinks {
  type: "FILTER_LINKS";
  payload: object;
}

export const filterLinks = (topic: object): FilterLinks => ({
  type: "FILTER_LINKS",
  payload: topic
});
