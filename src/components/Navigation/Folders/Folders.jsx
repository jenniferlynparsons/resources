/* eslint-disable react/prop-types */
import React from "react";
import FolderList from "../FolderList";

function Folders(props) {
  return (
    <nav className="navbar is-light is-size-7">
      <div className="navbar-brand">
        <a
          className={
            "navbar-burger burger " + (props.showNavbar ? "is-active" : "")
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => props.toggleNavBar()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={"navbar-menu " + (props.showNavbar ? "is-active" : "")}
      >
        <div className="navbar-start">
          {props.links.map(folder => {
            return (
              <div
                key={folder.guid}
                className={
                  "navbar-item has-dropdown " +
                  (props.showMenu === folder.title ? "is-active" : "")
                }
              >
                <a
                  className="navbar-link"
                  onClick={() => props.toggleNav(folder.title)}
                >
                  {folder.title}
                </a>
                <div className="navbar-dropdown">
                  <FolderList
                    title={folder.title}
                    parent={folder.title}
                    links={folder.links.filter(item => {
                      return item.links;
                    })}
                    guid={folder.guid}
                    typeCode={folder.typeCode}
                    handleClick={props.handleClick}
                    toggleNav={props.toggleNav}
                    toggleNavbar={props.toggleNavBar}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Folders;
