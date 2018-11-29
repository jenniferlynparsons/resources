import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
// Smart components

// Component to be tested
import LinkList from "../components/LinkList";

describe("<LinkList />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const wrapper = shallow(<LinkList />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
