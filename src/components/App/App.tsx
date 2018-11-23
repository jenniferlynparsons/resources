import React from "react";
import { Provider } from "react-redux";
import { Props, State } from "../../interfaces";
import store from "../../store";
import NavBar from "../NavBar";
import Bookmarks from "../Bookmarks";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Bookmarks />
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
