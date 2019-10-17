import React from "react";
import { connect } from "react-redux";

import { Topic } from "./Topic";

class TopicContainer extends React.Component {
  render() {
    return (
      <Topic
        links={this.props.links}
        title={this.props.topic.title}
        guid={this.props.topic.guid}
        folder={this.props.folder}
      />
    );
  }
}

const mapStateToProps = state => ({
  links: state.topic.links,
  topic: state.topic || "",
  folder: state.topic.parent || ""
});

export default connect(mapStateToProps)(TopicContainer);
