import { State, Action } from "../interfaces";

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

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "FILTER_LINKS":
      return { ...state, topic: action.payload };

    default:
      return state;
  }
};
