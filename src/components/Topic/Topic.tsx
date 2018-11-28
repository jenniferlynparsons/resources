import React from "react";
import { connect } from "react-redux";
import { Props, State } from "../../interfaces";
import TopicList from "../TopicList";

class Topic extends React.Component<Props, State> {
  render() {
    console.log("topic props", this.props);
    if (this.props.topic.guid) {
      return (
        <div className="column is-three-quarters">
          <section className="content">
            <h2 className="is-size-4 has-text-weight-bold">
              {this.props.folder} - {this.props.topic.title}
            </h2>
            <TopicList children={this.props.children} />
          </section>
        </div>
      );
    } else {
      return (
        <div className="column is-three-quarters">
          <section className="content">
            <h2 className="is-size-4 has-text-weight-bold">Choose a topic</h2>
            <p>Click a topic from the menu to get started!</p>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: State) => ({
  children: state.topic.children,
  topic: state.topic || "",
  folder: state.topic.parent || ""
});

export default connect(mapStateToProps)(Topic);
