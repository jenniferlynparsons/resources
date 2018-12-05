import React from "react";
import { shallow } from "enzyme";
import LinkList from "..";

const shortMockList = [
  {
    guid: "b98dms6IKL5o",
    title: "Awesome Talks",
    index: 0,
    dateAdded: 1528148439910000,
    lastModified: 1542725709314000,
    id: 5855,
    typeCode: 1,
    type: "text/x-moz-place",
    uri: "https://awesometalks.party/"
  }
];

describe("<LinkList />", () => {
  describe("inner logic", () => {
    test("if !link.links", () => {
      const component = shallow(<LinkList links={shortMockList} />);

      expect(
        component.containsMatchingElement(
          <ul>
            <li>
              <a href="https://awesometalks.party/">Awesome Talks</a>
            </li>
          </ul>
        )
      ).toBeTruthy();
    });
  });
});
