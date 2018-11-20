import React from "react";
import TopicList from "../TopicList";
import FolderList from "../FolderList";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: {
        children: [],
        dateAdded: "",
        guid: "",
        id: "",
        index: "",
        lastModified: "",
        title: "",
        type: "",
        typeCode: ""
      },
      folder: "",
      handleClick: this.handleClick
    };
  }

  handleClick = (t, f) => {
    this.setState({ currentTopic: t, folder: f });
  };

  render() {
    // console.log(this.state);
    return (
      <section className="section">
        <div className="container content">
          <h1 className="">Software Engineering Resources</h1>
        </div>
        <div className="columns">
          <aside className="menu column is-one-quarter">
            {this.props.source.children.map(folder => {
              return (
                <React.Fragment key={folder.id}>
                  <p className="menu-label">{folder.title}</p>
                  <ul className="menu-list">
                    <FolderList
                      children={folder.children}
                      handleClick={this.state.handleClick}
                    />
                  </ul>
                </React.Fragment>
              );
            })}
          </aside>
          <div className="column">
            <TopicList
              topic={this.state.currentTopic}
              folder={this.state.folder}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Bookmarks;
