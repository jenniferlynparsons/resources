import * as actions from "../actions";

describe("actions", () => {
  it("should create an action to filter the link list", () => {
    const topic = {};
    const expectedAction = {
      type: "FILTER_LINKS",
      payload: topic
    };
    expect(actions.filterLinks(topic)).toEqual(expectedAction);
  });
});
