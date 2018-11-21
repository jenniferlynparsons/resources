import React from "react";
import TopicList from "../TopicList";
import FolderList from "../FolderList";

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: {
        children: [],
        dateAdded: "",
        guid: "",
        id: "",
        index: "",
        lastModified: "",
        title: "",
        type: "",
        typeCode: ""
      },
      folder: "",
      handleClick: this.handleClick
    };
  }

  handleClick = event => {
    console.log(event.target.id);
    console.log("working");
    console.log(this.props.source.children);
    const topic = this.props.source.children.filter(t => {});

    // const topic = this.props.source.children.filter(t =>
    //   this.isDescendant(t, id)
    // );

    // isDescendant = (p, id) => {
    //   if (p.guid == id) return true;
    //   if (!p.guid) return false;
    //   return this.isDescendant(
    //     this.products.filter(
    //       p => p.product.id_product == p.id_productParent
    //     )[0],
    //     id
    //   );
    // };
    // this.setState({ currentTopic: t, folder: f });
  };

  render() {
    // console.log(this.state);
    return (
      <section className="section">
        <div className="container content">
          <h1 className="">Software Engineering Resources</h1>
        </div>
        <div className="columns">
          <aside className="menu column is-one-quarter">
            {this.props.source.children.map(folder => {
              return (
                <React.Fragment key={folder.id}>
                  <p className="menu-label">{folder.title}</p>
                  <ul className="menu-list" onClick={this.state.handleClick}>
                    <FolderList children={folder.children} />
                  </ul>
                </React.Fragment>
              );
            })}
          </aside>
          <div className="column">
            <TopicList
              topic={this.state.currentTopic}
              folder={this.state.folder}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Bookmarks;
