import React from "react";

class LinkList extends React.Component {
  linkElement(linkID, linkURI, linkTitle) {
    if (linkURI) {
      return (
        <li key={linkID}>
          <a href={linkURI}>{linkTitle}</a>
        </li>
      );
    } else {
      return "";
    }
  }
  render() {
    return (
      <ul>
        {this.props.links.map(link => {
          return this.linkElement(link.id, link.uri, link.title);
        })}
      </ul>
    );
  }
}

export default LinkList;