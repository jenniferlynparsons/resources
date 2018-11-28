import { State, Action } from "../interfaces";

const initialState = {
  topic: {},
  folder: "",
  parent: "",
  title: "",
  children: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "FILTER_LINKS":
      // console.log("payload", action.payload);
      return { ...state, topic: action.payload };

    default:
      return state;
  }
};
