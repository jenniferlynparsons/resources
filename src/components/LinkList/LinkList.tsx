import React from "react";
import { LinkListProps } from "../../interfaces";

class LinkList extends React.Component<LinkListProps, {}> {
  linkElement(linkURI, linkTitle) {
    if (linkURI) {
      return <a href={linkURI}>{linkTitle}</a>;
    } else {
      return (
        <a href={"/" + this.props.parentTitle + "/" + linkTitle}>{linkTitle}</a>
      );
    }
  }
  render() {
    console.log(this.props);
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
