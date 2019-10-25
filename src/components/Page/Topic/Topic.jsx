import React from "react";
import LinkList from "../LinkList";

export const Topic = props => {
  if (props.guid) {
    return (
      <div className="column is-three-quarters">
        <section className="content">
          <h2 className="is-size-4 has-text-weight-bold">
            {props.parent} - {props.title}
          </h2>
          <LinkList links={props.links} />
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
