import React from "react";
import { Props, State } from "../../interfaces";
import { connect } from "react-redux";
// import TopicList from "../TopicList";
import FolderList from "../FolderList";

class Bookmarks extends React.Component<Props, State> {
  // handleClick = (t, f) => {
  //   this.setState({ currentTopic: t, folder: f });
  // };

  render() {
    console.log(this.props);
    return (
      <section className="section">
        <div className="container content">
          <h1 className="">Software Engineering Resources</h1>
        </div>
        <div className="columns">
          <aside className="menu column is-one-quarter">
            {this.props.children.map(folder => {
              return (
                <React.Fragment key={folder.guid}>
                  <p className="menu-label">{folder.title}</p>
                  <ul className="menu-list">
                    <FolderList children={folder.children} />
                  </ul>
                </React.Fragment>
              );
            })}
          </aside>
          {/* <div className="column">
            <TopicList
              topic={this.state.currentTopic}
              folder={this.state.folder}
            />
          </div> */}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const props = {
    children: state.children
  };
  return props;
}

export default connect(mapStateToProps)(Bookmarks);
