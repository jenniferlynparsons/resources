import React from "react";
import { FolderListProps } from "../../interfaces";

class FolderList extends React.Component<FolderListProps, {}> {
  render() {
    const { title, links, handleClick, parent, typeCode } = this.props;
    const guid = this.props.links[0].guid;
    const kids = links.filter(item => {
      return item.links;
    });
    if (typeCode === 2) {
      return (
        <React.Fragment key={"fragment-" + guid}>
          <li className="menu-item">
            <a
              id={"link=" + guid}
              onClick={() => {
                handleClick(this.props);
              }}
            >
              {title}
            </a>
          </li>

          {kids &&
            kids.map(kid => (
              <li key={"nested-li-folder-" + kid.guid}>
                <ul className="menu-list">
                  <FolderList
                    guid={kid.guid}
                    handleClick={handleClick}
                    links={kid.links}
                    parent={title}
                    title={kid.title}
                    typeCode={kid.typeCode}
                  />
                </ul>
              </li>
            ))}
        </React.Fragment>
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
