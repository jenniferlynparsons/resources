import React from "react";
import { Provider } from "react-redux";
import { Props, State } from "../../interfaces";
import store from "../../store";
import Folders from "../Folders";
import Topic from "../Topic";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Provider store={store}>
          <div className="container">
            <section className="hero is-info is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Web Development Resources</h1>
                  <h2 className="subtitle">Last updated: 11.27.18</h2>
                  <p>
                    These are the resources that I've found most useful over the
                    years.
                  </p>
                  <p>
                    They cover a wide range of topics I've studied while
                    deepening my knowledge and developing my skills.
                  </p>
                </div>
              </div>
            </section>
            <div className="notification">
              <p>
                This site is currently in development as I reorganize and refine
                the presentation. It was built with React, Redux, and Bulma.
              </p>
            </div>
            <section className="section">
              <div className="columns">
                <Folders />
                <Topic />
              </div>
            </section>
          </div>
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
