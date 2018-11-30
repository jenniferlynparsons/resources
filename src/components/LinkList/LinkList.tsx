import React from "react";
import { LinkListProps } from "../../interfaces";

class LinkList extends React.Component<LinkListProps, {}> {
  render() {
    return (
      <ul>
        {this.props.links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.uri}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LinkList;
