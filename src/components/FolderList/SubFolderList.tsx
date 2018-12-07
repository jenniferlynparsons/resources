import React from "react";
import { Link } from "@reach/router";
import { FolderListProps } from "../../interfaces";
import { SubFolderList } from "./SubFolderList";

class SubFolderList extends React.Component<FolderListProps, {}> {
  render() {
    const { title, links, handleClick, parent, typeCode } = this.props;
    const guid = this.props.links[0].guid;
    const kids = links.filter(item => {
      return item.links;
    });
    console.log(kids.length);
    if (typeCode === 2 && kids.length !== 0) {
      return (
        <React.Fragment key={"fragment-" + guid}>
          <Link
            className="navbar-item has-text-grey-dark"
            to={"/" + parent + "/" + title}
            id={"link=" + guid}
            onClick={() => {
              handleClick(this.props);
            }}
          >
            {title}
          </Link>
          {kids &&
            kids.map(kid => (
              <React.Fragment key={"nested-li-folder-" + kid.guid}>
                <div>
                  <SubFolderList
                    guid={kid.guid}
                    handleClick={handleClick}
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
          <Link
            className="navbar-item has-text-grey"
            to={"/" + parent + "/" + title}
            id={"link=" + guid}
            onClick={() => {
              handleClick(this.props);
            }}
          >
            {title}
          </Link>
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
