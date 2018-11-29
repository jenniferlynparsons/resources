import React from "react";
import { TopicProps } from "../../interfaces";
import LinkList from "../LinkList";

export const Topic = (props: TopicProps) => {
  if (props.topic.guid) {
    return (
      <div className="column is-three-quarters">
        <section className="content">
          <h2 className="is-size-4 has-text-weight-bold">
            {props.folder} - {props.topic.title}
          </h2>
          <LinkList children={props.children} />
        </section>
      </div>
    );
  } else {
    return (
      <div className="column is-three-quarters">
        <section className="content">
          <h2 className="is-size-4 has-text-weight-bold">Choose a topic</h2>
          <p>Click a topic from the menu to get started!</p>
        </section>
      </div>
    );
  }
};
