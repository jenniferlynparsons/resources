import React from "react";
import { Link } from "@reach/router";
import { FolderListProps } from "../../interfaces";

class SubFolderList extends React.Component<FolderListProps, {}> {
  render() {
    const {
      title,
      links,
      handleClick,
      parent,
      typeCode,
      toggleNav
    } = this.props;
    const guid = this.props.links[0].guid;
    const kids = links.filter(item => {
      return item.links;
    });

    if (typeCode === 2 && kids.length !== 0) {
      return (
        <React.Fragment key={"fragment-" + guid}>
          <a
            className="navbar-item"
            id={"link=" + guid}
            onClick={() => {
              handleClick(this.props);
              toggleNav();
            }}
          >
            {title}
          </a>
          {kids &&
            kids.map(kid => (
              <React.Fragment key={"nested-li-folder-" + kid.guid}>
                <div>
                  <SubFolderList
                    guid={kid.guid}
                    handleClick={handleClick}
                    toggleNav={toggleNav}
                    links={kid.links}
                    parent={title}
                    title={kid.title}
                    typeCode={kid.typeCode}
                  />
                </div>
              </React.Fragment>
            ))}
        </React.Fragment>
      );
    } else if (typeCode === 2) {
      return (
        <React.Fragment key={"fragment-" + guid}>
          <a
            className="navbar-item"
            id={"link=" + guid}
            onClick={() => {
              handleClick(this.props);
              toggleNav();
            }}
          >
            {title}
          </a>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={guid}>
          {kids &&
            kids.map(kid => (
              <SubFolderList
                guid={kid.guid}
                handleClick={handleClick}
                toggleNav={toggleNav}
                key={kid.guid}
                links={kid.links}
                parent={parent}
                title={kid.title}
                typeCode={kid.typeCode}
              />
            ))}
        </React.Fragment>
      );
    }
  }
}

export default SubFolderList;
