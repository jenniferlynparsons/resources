import React from "react";
import jsonResponse from "./../../bookmarkData.json";
import NavBar from "../NavBar";
import Bookmarks from "../Bookmarks";
import Footer from "../Footer";
import "../../../node_modules/bulma/bulma.sass";
import "../../common_styles/global.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Bookmarks source={jsonResponse} />
        <Footer />
      </div>
    );
  }
}

export default App;
