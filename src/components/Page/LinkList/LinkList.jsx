import React from "react";

function LinkList(props) {
  return (
    <ul>
      {props.links.map(link => (
        <li key={link.id}>
          <a href={link.uri}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
