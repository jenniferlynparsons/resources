import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import Topic from "..";

const shortMockTopic = {
  folder: "Humane Tech"
  guid: "l2evbvL4pQvN",
  title: "humane tech",
  index: 19,
  dateAdded: 1.52657865487e15,
  lastModified: 1.542725834399e15,
  id: 195,
  typeCode: 3,
  type: "text/x-moz-place-container",
  links: [
    {
      guid: "ojGGSnqAmHPI",
      title: "General",
      index: 0,
      dateAdded: 1.542725827429e15,
      lastModified: 1.542725834399e15,
      id: 6366,
      typeCode: 2,
      type: "text/x-moz-place-container",
      links: [
        {
          guid: "xg8tjpThP5mk",
          title: "Calm Technology",
          index: 0,
          dateAdded: 1.52657882971e15,
          lastModified: 1.542725834262e15,
          id: 1070,
          typeCode: 1,
          type: "text/x-moz-place",
          uri: "https://calmtech.com/"
        },
        {
          guid: "3uXtw0Kr5yBC",
          title: "How to Reclaim Your Relationship with Tech: Tools & Tips",
          index: 1,
          dateAdded: 1.52657865487e15,
          lastModified: 1.542725834282e15,
          id: 1211,
          typeCode: 1,
          type: "text/x-moz-place",
          uri:
            "https://medium.com/@caseorganic/how-to-reclaim-your-relationship-with-tech-tools-tips-690d0fd771fe"
        },
        {
          guid: "b_RIOQLS_1lG",
          title: "Center for Humane Technology",
          index: 2,
          dateAdded: 1.52657893384e15,
          lastModified: 1.542725834296e15,
          id: 1005,
          typeCode: 1,
          type: "text/x-moz-place",
          uri: "http://humanetech.com/"
        }
      ]
    }
  ]
};

describe("<Topic />", () => {
    test("it works", () => {
      const component = shallow(<Topic links={shortMockTopic.links} title={shortMockTopic.title} folder={shortMockTopic.folder} guid={shortMockTopic.guid}/>);

      expect(
        component.containsMatchingElement(
          <div className="column is-three-quarters">
        <section className="content">
          <h2 className="is-size-4 has-text-weight-bold">
            Humane Tech - humane tech
          </h2>
          <LinkList links={props.links} />
        </section>
      </div>
        )
      ).toBeTruthy();
    });
});
