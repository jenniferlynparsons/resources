import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterLinks } from "../../../actions";
import Folders from "./Folders";

export default () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState("");

  const links = useSelector(state => state.links);

  const dispatch = useDispatch();

  const toggleNavBar = () => {
    setShowNavbar(showNavbar ? false : true);
  };

  const toggleNav = title => {
    setShowMenu(title !== showMenu ? title : "");
  };

  const handleClick = topic => {
    setShowMenu("");
    dispatch(filterLinks(topic));
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
