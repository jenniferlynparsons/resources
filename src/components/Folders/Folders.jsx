import React from "react";
import FoldersDropdown from "./FoldersDropdown";

class Folders extends React.Component {
  state = {
    showNavbar: false
  };

  toggleNavBar = () => {
    const navvisibility = this.state.showNavbar === false ? true : false;
    this.setState({ showNavbar: navvisibility });
  };

  render() {
    return (
      <nav className="navbar is-light is-size-7">
        <div className="navbar-brand">
          <a
            role="button"
            className={
              "navbar-burger burger " +
              (this.state.showNavbar ? "is-active" : "")
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleNavBar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={
            "navbar-menu " + (this.state.showNavbar ? "is-active" : "")
          }
        >
          <div className="navbar-start">
            {this.props.links.map(folder => {
              return (
                <FoldersDropdown
                  key={folder.id}
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
