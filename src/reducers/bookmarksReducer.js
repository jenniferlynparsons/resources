const initialState = {
  children: [],
  dateAdded: "",
  folder: "",
  guid: "",
  id: "",
  index: "",
  lastModified: "",
  title: "",
  topic: {},
  type: "",
  typeCode: ""
};

export default (state, action) => {
  switch (action.type) {
    case "FILTER_LINKS":
      return { ...state, topic: action.payload };

    default:
      return state;
  }
};
