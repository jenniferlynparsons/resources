import React from "react";

export default props => {
  return (
    <ul>
      {props.links.map(link => (
        <li key={link.id}>
          <a href={link.uri}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};
