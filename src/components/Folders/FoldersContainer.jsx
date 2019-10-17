import React from "react";
import { connect } from "react-redux";
import Folders from "./Folders";
import { filterLinks } from "../../actions";

class FoldersContainer extends React.Component {
  render() {
    return (
      <Folders links={this.props.links} handleClick={this.props.handleClick} />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
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
