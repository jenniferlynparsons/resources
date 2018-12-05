import React from "react";
import { FolderProps } from "../../interfaces";
import FolderList from "../FolderList";

export const Folders = (props: FolderProps) => {
  return (
    <div className="menu column is-one-quarter">
      {props.links.map(folder => {
        return (
          <React.Fragment key={folder.guid}>
            <p className="menu-label">{folder.title}</p>
            <ul className="menu-list">
              <FolderList
                title={folder.title}
                parent={folder.title}
                links={folder.links}
                guid={folder.guid}
                handleClick={props.handleClick}
                typeCode={folder.typeCode}
              />
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};
