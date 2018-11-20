import React from "react";

class TopicList extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.currentTopic) {
      return (
        <section className="section">
          <ul className="menu-list">
            {this.props.currentTopic.map(function(bookmark) {
              return (
                <li key={bookmark.id}>
                  <a href={bookmark.uri}>{bookmark.title}</a>
                </li>
              );
            })}
          </ul>
        </section>
      );
    } else {
      return (
        <section className="section">
          <p>Choose a topic</p>
        </section>
      );
    }
  }
}

export default TopicList;
