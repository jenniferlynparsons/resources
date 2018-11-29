import React from "react";
import { connect } from "react-redux";
import { TopicProps, TopicState, AppState } from "../../interfaces";
import { Topic } from "./Topic";

class TopicContainer extends React.Component<TopicProps, TopicState> {
  render() {
    return (
      <Topic
        children={this.props.children}
        topic={this.props.topic}
        folder={this.props.folder}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  children: state.topic.children,
  topic: state.topic || "",
  folder: state.topic.parent || ""
});

export default connect(mapStateToProps)(TopicContainer);
