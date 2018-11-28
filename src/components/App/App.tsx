import React from "react";
import { Provider } from "react-redux";
import { Props, State } from "../../interfaces";
import store from "../../store";
import NavBar from "../NavBar";
import Folders from "../Folders";
import Topic from "../Topic";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <section className="section">
            <div className="container content">
              <h1 className="">Software Engineering Resources</h1>
            </div>
            <div className="columns">
              <Folders />
              <Topic />
            </div>
          </section>
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
