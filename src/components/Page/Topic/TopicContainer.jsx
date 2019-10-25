import React from "react";
import { useSelector } from "react-redux";

import { Topic } from "./Topic";

export default () => {
  const { links, title, guid, parent } = useSelector(state => state.topic);

  return <Topic links={links} title={title} guid={guid} parent={parent} />;
};
