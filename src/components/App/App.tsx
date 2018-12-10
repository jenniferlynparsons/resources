import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "../../store";
import Folders from "../Folders";
import Topic from "../Topic";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <section className="hero is-info is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Web Development Resources</h1>
                <h2 className="subtitle">Last updated: 12.10.18</h2>
                <p>
                  These are the resources that I've found most useful over the
                  years. They cover a wide range of topics I've studied while
                  deepening my knowledge and developing my skills. This site is
                  currently in development as I reorganize and refine the
                  presentation. It was built with React, Redux, and Bulma.
                </p>
              </div>
            </div>
          </section>
          <Folders />
          <section className="section">
            <Router>
              <Topic path=":linkPath" />
            </Router>
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
