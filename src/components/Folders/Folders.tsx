import React from "react";
import { FolderProps } from "../../interfaces";
import FoldersDropdown from "./FoldersDropdown";

class Folders extends React.Component<FolderProps, {}> {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {this.props.links.map(folder => {
              return (
                <FoldersDropdown
                  folder={folder}
                  handleClick={this.props.handleClick}
                />
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Folders;
