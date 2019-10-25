export default (state, action) => {
  switch (action.type) {
    case "FILTER_LINKS":
      return { ...state, topic: action.payload };

    default:
      return state;
  }
};
