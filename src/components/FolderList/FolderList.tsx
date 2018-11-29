import React from "react";
import { FolderListProps } from "../../interfaces";

class FolderList extends React.Component<FolderListProps, {}> {
  render() {
    const { title, links, handleClick, parent } = this.props;
    const guid = this.props.links[0].guid;
    const kids = links.filter(item => {
      return item.links;
    });
    if (title) {
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
                    title={kid.title}
                    parent={title}
                    links={kid.links}
                    guid={kid.guid}
                    handleClick={handleClick}
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
                key={kid.guid}
                title={kid.title}
                guid={kid.guid}
                parent={parent}
                links={kid.links}
                handleClick={handleClick}
              />
            ))}
        </React.Fragment>
      );
    }
  }
}

export default FolderList;
