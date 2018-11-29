import React from "react";
import { connect } from "react-redux";
import { TopicContainerProps, AppState } from "../../interfaces";
import { Topic } from "./Topic";

class TopicContainer extends React.Component<TopicContainerProps> {
  render() {
    return (
      <Topic
        links={this.props.links}
        topic={this.props.topic}
        folder={this.props.folder}
        title=""
        guid=""
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  links: state.topic.links,
  topic: state.topic || "",
  folder: state.topic.parent || ""
});

export default connect(mapStateToProps)(TopicContainer);
