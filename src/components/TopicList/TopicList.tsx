import React from "react";
import { Props, State } from "../../interfaces";

class TopicList extends React.Component<Props, State> {
  render() {
    // console.log("topic props", this.props);

    return (
      <ul>
        {this.props.children.map(bookmark => {
          if (!bookmark.children) {
            return (
              <li key={bookmark.id}>
                <a href={bookmark.uri}>{bookmark.title}</a>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default TopicList;
