import React from "react";

class TopicList extends React.Component {
  render() {
    // console.log(this.props);
    if (this.props.topic.guid) {
      return (
        <section className=" content">
          <h2>
            {this.props.folder} - {this.props.topic.title}
          </h2>
          <ul>
            {this.props.topic.children.map(function(bookmark) {
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
