import React from "react";
import SubFolderList from "./SubFolderList";

function FolderList(props) {
  if (
    props.typeCode === 2 &&
    props.links.length !== 0 &&
    props.links[0].type === "text/x-moz-place-container"
  ) {
    return (
      <React.Fragment key={"fragment-" + props.guid}>
        <hr className="navbar-divider" />
        <p className="navbar-item has-text-grey">{props.title}</p>
        {props.links &&
          props.links.map(kid => (
            <React.Fragment key={"nested-li-folder-" + kid.guid}>
              <div>
                <SubFolderList
                  guid={kid.guid}
                  links={kid.links}
                  parent={props.title}
                  title={kid.title}
                  typeCode={kid.typeCode}
                  handleClick={props.handleClick}
                  toggleNav={props.toggleNav}
                />
              </div>
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  } else if (
    props.typeCode === 2 &&
    props.links &&
    props.links[0].type === "text/x-moz-place"
  ) {
    return (
      <React.Fragment key={"fragment-" + props.guid}>
        <hr className="navbar-divider" />
        <a
          className="navbar-item a"
          id={"link-" + props.guid}
          onClick={() => {
            props.handleClick(props.title);
            props.toggleNav();
          }}
        >
          {props.title}
        </a>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment key={props.guid}>
        {props.links &&
          props.links.map(kid => (
            <FolderList
              guid={kid.guid}
              handleClick={props.handleClick}
              toggleNav={props.toggleNav}
              key={kid.guid}
              links={kid.links}
              parent={props.parent}
              title={kid.title}
              typeCode={kid.typeCode}
            />
          ))}
      </React.Fragment>
    );
  }
}

export default FolderList;
