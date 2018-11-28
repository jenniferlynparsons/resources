import React from "react";
import { Props, State } from "../../interfaces";

class FolderList extends React.Component<Props, State> {
  render() {
    const { title, children, handleClick, parent } = this.props;
    const guid = this.props.children[0].guid;
    const kids = children.filter(item => {
      return item.children;
    });
    // console.log("folderlist props ", this.props);
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
                    children={kid.children}
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
                children={kid.children}
                handleClick={handleClick}
              />
            ))}
        </React.Fragment>
      );
    }
  }
}

export default FolderList;
