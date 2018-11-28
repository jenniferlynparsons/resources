interface FilterLinks {
  type: "FILTER_LINKS";
  payload: object;
}

export const filterLinks = (topic: object): FilterLinks => ({
  type: "FILTER_LINKS",
  payload: topic
});
