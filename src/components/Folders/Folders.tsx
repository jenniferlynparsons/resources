import React from "react";
import { FolderProps } from "../../interfaces";
import FolderList from "../FolderList";

export const Folders = (props: FolderProps) => {
  return (
    <div className="menu column is-one-quarter">
      {props.children.map(folder => {
        return (
          <React.Fragment key={folder.guid}>
            <p className="menu-label">{folder.title}</p>
            <ul className="menu-list">
              <FolderList
                title={folder.title}
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
