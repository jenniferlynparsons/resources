import React from "react";
import { connect } from "react-redux";
import { Props, State } from "../../interfaces";
import TopicList from "../TopicList";

class Topic extends React.Component<Props, State> {
  render() {
    console.log("topic props", this.props);
    if (this.props.topic.guid) {
      return (
        <div className="column">
          <section className=" content">
            <h2>
              {this.props.folder} - {this.props.topic.title}
            </h2>
            <TopicList children={this.props.children} />
          </section>
        </div>
      );
    } else {
      return (
        <div className="column">
          <section className="section">
            <p>Choose a topic</p>
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
