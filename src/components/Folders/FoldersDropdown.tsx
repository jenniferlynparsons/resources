import React from "react";
import { FolderProps } from "../../interfaces";
import FolderList from "../FolderList";

class FoldersDropdown extends React.Component<FolderProps, {}> {
  state = {
    showMenu: false
  };

  toggleNav = () => {
    var visibility = this.state.showMenu === false ? true : false;
    this.setState({ showMenu: visibility });
  };
  render() {
    return (
      <div
        className={
          "navbar-item has-dropdown " + (this.state.showMenu ? "is-active" : "")
        }
      >
        <a className="navbar-link" onClick={this.toggleNav}>
          {this.props.folder.title}
        </a>
        <div className="navbar-dropdown">
          <FolderList
            title={this.props.folder.title}
            parent={this.props.folder.title}
            links={this.props.folder.links}
            guid={this.props.folder.guid}
            handleClick={this.props.handleClick}
            typeCode={this.props.folder.typeCode}
          />
        </div>
      </div>
    );
  }
}

export default FoldersDropdown;

// https://stackoverflow.com/questions/42630473/react-toggle-class-onclick
// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
