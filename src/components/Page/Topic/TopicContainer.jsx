import React from "react";
import { useSelector } from "react-redux";

import Topic from "./Topic";

function TopicContainer() {
  const { links, title, guid, parent } = useSelector(state => state.topic);

  return <Topic links={links} title={title} guid={guid} parent={parent} />;
}

export default TopicContainer;
