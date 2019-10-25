import React, { useState } from "react";
import { useSelector } from "react-redux";
import Folders from "./Folders";

export default () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState("");

  const links = useSelector(state => state.links);

  const toggleNavBar = () => {
    setShowNavbar(showNavbar === false ? true : false);
  };

  const toggleNav = title => {
    setShowMenu(title !== showMenu ? title : "");
  };

  const handleClick = () => {
    setShowMenu("");
  };

  return (
    <Folders
      links={links}
      showNavbar={showNavbar}
      showMenu={showMenu}
      handleClick={handleClick}
      toggleNavBar={toggleNavBar}
      toggleNav={toggleNav}
    />
  );
};

// const mapStateToProps = state => ({
//   links: state.links,
//   topic: state.topic,
//   folder: state.folder
// });

// const mapDispatchToProps = dispatch => ({
//   handleClick: t => {
//     dispatch(filterLinks(t));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FoldersContainer);
