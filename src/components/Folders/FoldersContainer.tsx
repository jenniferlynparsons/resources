import React from "react";
import { FoldersContainerProps, AppState } from "../../interfaces";
import { connect } from "react-redux";
import { Folders } from "./Folders";
import { filterLinks } from "../../actions";

class FoldersContainer extends React.Component<
  FoldersContainerProps,
  AppState
> {
  render() {
    return (
      <Folders
        children={this.props.children}
        handleClick={this.props.handleClick}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  children: state.children,
  topic: state.topic,
  folder: state.folder
});

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: (t: any) => {
    dispatch(filterLinks(t));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoldersContainer);
