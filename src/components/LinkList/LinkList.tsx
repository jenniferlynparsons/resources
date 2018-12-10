import React from "react";
import { Link } from "@reach/router";
import { LinkListProps } from "../../interfaces";

class LinkList extends React.Component<LinkListProps, {}> {
  linkElement(linkURI, linkTitle) {
    if (linkURI) {
      return <a href={linkURI}>{linkTitle}</a>;
    } else {
      return (
        <Link to={"/" + this.props.parentTitle + "/" + linkTitle}>
          {linkTitle}
        </Link>
      );
    }
  }
  render() {
    return (
      <ul>
        {this.props.links.map(link => {
          return (
            <li key={link.id}>{this.linkElement(link.uri, link.title)}</li>
          );
        })}
      </ul>
    );
  }
}

export default LinkList;
