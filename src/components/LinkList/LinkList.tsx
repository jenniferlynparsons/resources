import React from "react";
import { Link } from "../../interfaces";

class LinkList extends React.Component<Link, {}> {
  render() {
    return (
      <ul>
        {this.props.children.map(link => {
          if (!link.children) {
            return (
              <li key={link.id}>
                <a href={link.uri}>{link.title}</a>
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

export default LinkList;
