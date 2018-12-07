import React from "react";
import { Link } from "@reach/router";
import { FolderListProps } from "../../interfaces";

class FolderList extends React.Component<FolderListProps, {}> {
  render() {
    const { title, links, handleClick, parent, typeCode } = this.props;
    const guid = this.props.links[0].guid;
    const kids = links.filter(item => {
      return item.links;
    });
    if (typeCode === 2 && kids) {
      return (
        <React.Fragment key={"fragment-" + guid}>
          <Link
            className="navbar-item"
            to={"/" + parent + "/" + title}
            id={"link=" + guid}
            onClick={() => {
              handleClick(this.props);
            }}
          >
            {title}
          </Link>
          <div className="navbar-dropdown">
            {kids &&
              kids.map(kid => (
                <React.Fragment key={"nested-li-folder-" + kid.guid}>
                  <FolderList
                    guid={kid.guid}
                    handleClick={handleClick}
                    links={kid.links}
                    parent={title}
                    title={kid.title}
                    typeCode={kid.typeCode}
                  />
                </React.Fragment>
              ))}
          </div>
        </React.Fragment>
      );
    } else if (typeCode === 1) {
      return (
        <Link
          className="navbar-item"
          to={"/" + parent + "/" + title}
          id={"link=" + guid}
          onClick={() => {
            handleClick(this.props);
          }}
        >
          {title}
        </Link>
      );
    } else {
      return (
        <React.Fragment key={guid}>
          {kids &&
            kids.map(kid => (
              <FolderList
                guid={kid.guid}
                handleClick={handleClick}
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

export default FolderList;
