import React from "react";

class FolderList extends React.Component {
  render() {
    return (
      <ul className="menu-list">
        {this.props.topics.map(function(topic) {
          if (!topic.uri) {
            return (
              <li key={topic.guid}>
                <a onClick={this.props.handleClick(topic.guid)}>
                  {topic.title}
                </a>
              </li>
            );
          }
        }, this)}
      </ul>
    );
  }
}

export default FolderList;
