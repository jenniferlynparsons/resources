import React from "react";
import { connect } from "react-redux";
import Folders from "./Folders";
import { filterLinks } from "../../../actions";

class FoldersContainer extends React.Component {
  state = {
    showNavbar: false,
    showMenu: ""
  };

  toggleNavBar = () => {
    const navvisibility = this.state.showNavbar === false ? true : false;
    this.setState({ showNavbar: navvisibility });
  };

  handleClickOutside() {
    this.setState({ showMenu: false });
  }

  toggleNav = title => {
    const currentMenu = this.state.showMenu;
    this.setState({ showMenu: title !== currentMenu ? title : "" });
  };

  render() {
    return (
      <Folders
        links={this.props.links}
        handleClick={this.props.handleClick}
        toggleNav={this.toggleNav}
        toggleNavBar={this.toggleNavBar}
        showNavbar={this.state.showNavbar}
        showMenu={this.state.showMenu}
      />
    );
  }
}

const mapStateToProps = state => ({
  links: state.links,
  topic: state.topic,
  folder: state.folder
});

const mapDispatchToProps = dispatch => ({
  handleClick: t => {
    dispatch(filterLinks(t));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);
