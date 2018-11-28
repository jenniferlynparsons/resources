import React from "react";
import { Props, State } from "../../interfaces";
import { connect } from "react-redux";
import FolderList from "../FolderList";
import { filterLinks } from "../../actions";

class Folders extends React.Component<Props, State> {
  render() {
    // console.log(this.props);

    return (
      <aside className="menu column is-one-quarter">
        {this.props.children.map(folder => {
          return (
            <React.Fragment key={folder.guid}>
              <p className="menu-label">{folder.title}</p>
              <ul className="menu-list">
                <FolderList
                  parent={folder.title}
                  children={folder.children}
                  guid={folder.guid}
                  handleClick={this.props.handleClick}
                />
              </ul>
            </React.Fragment>
          );
        })}
      </aside>
    );
  }
}

const mapStateToProps = (state: State) => ({
  children: state.children,
  topic: state.topic,
  folder: state.folder
});

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: (t: any) => {
    dispatch(filterLinks(t));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folders);
