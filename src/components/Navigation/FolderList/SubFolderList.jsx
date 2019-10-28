import React from "react";
import { Link } from "@reach/router";

function SubFolderList(props) {
  if (props.typeCode === 2 && (props.links && props.links.length !== 0)) {
    return (
      <React.Fragment key={"fragment-" + props.guid}>
        <Link
          className="navbar-item"
          id={"link=" + props.guid}
          to={props.parent + "/" + props.title}
          onClick={() => {
            props.handleClick(props);
            props.toggleNav();
          }}
        >
          {props.title}
        </Link>
        {props.links &&
          props.links.map(kid => (
            <React.Fragment key={"nested-li-folder-" + kid.guid}>
              <div>
                <SubFolderList
                  guid={kid.guid}
                  handleClick={props.handleClick}
                  toggleNav={props.toggleNav}
                  links={kid.links}
                  parent={props.title}
                  title={kid.title}
                  typeCode={kid.typeCode}
                />
              </div>
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  } else if (props.typeCode === 2) {
    return (
      <a
        className="navbar-item"
        id={"link=" + props.guid}
        onClick={() => {
          props.toggleNav();
        }}
      >
        {props.title}
      </a>
    );
  } else {
    return (
      <React.Fragment>
        {props.links &&
          props.links.map(kid => (
            <SubFolderList
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

export default SubFolderList;
