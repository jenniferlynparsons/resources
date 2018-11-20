import React from "react";
import TopicList from "../TopicList";
import FolderList from "../FolderList";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = t => {
    e.stopPropagation();
    this.setState({ currentTopic: t });
  };

  render() {
    return (
      <section className="section">
        <div className="container content">
          <h1 className="">Software Engineering Resources</h1>
        </div>
        <div className="columns">
          <aside className="menu column is-one-quarter">
            {this.props.source.children.map(function(folder) {
              return (
                <React.Fragment key={folder.id}>
                  <p className="menu-label">{folder.title}</p>
                  <FolderList topics={folder.children} />
                </React.Fragment>
              );
            })}
          </aside>
          <div className="column">
            <TopicList topic={this.state.currentTopic} />
          </div>
        </div>
      </section>
    );
  }
}

export default Bookmarks;
