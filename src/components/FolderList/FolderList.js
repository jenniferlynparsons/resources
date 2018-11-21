import React from "react";
import "./FolderList.scss";

class FolderList extends React.Component {
  render() {
    const { title, children } = this.props;
    const guid = this.props.children[0].guid;
    const kids = children.filter(item => {
      return item.children;
    });
    if (title) {
      return (
        <React.Fragment key={guid}>
          <li className="menu-item">
            <a id={guid}>{title}</a>
          </li>

          {kids &&
            kids.map(kid => (
              <li>
                <ul className="menu-list">
                  <FolderList
                    key={kid.guid}
                    title={kid.title}
                    children={kid.children}
                    handleClick={this.handleClick}
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
                children={kid.children}
              />
            ))}
        </React.Fragment>
      );
    }
  }
}

// <ul className="menu-list">
//   {this.props.topics.map(topic => {
//     if (!topic.uri) {
//       return (
//         <li key={topic.guid}>
//           <a
//             onClick={() => {
//               this.props.everything.handleClick(topic, this.props.folder);
//             }}
//           >
//             {topic.title}
//           </a>
//         </li>
//       );
//     }
//   })}
// </ul>

export default FolderList;
