import React from "react";
import { Props, Folder } from "../../interfaces";
import FolderList from "../FolderList";

export const Folders = (props: Props) => {
  return (
    <div className="menu column is-one-quarter">
      {props.folders.map((folder: Folder) => {
        return (
          <React.Fragment key={folder.guid}>
            <p className="menu-label">{folder.title}</p>
            <ul className="menu-list">
              <FolderList
                parent={folder.title}
                children={folder.children}
                guid={folder.guid}
                handleClick={props.handleClick}
              />
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};
