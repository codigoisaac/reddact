import { Component } from "react";
import Post from "./Post.js";
import Nav from "./Nav.js";
import "./index.css";

class App extends Component {
  state = {
    posts: [],
    selectedListing: "Hot",
    listings: ["Hot", "New", "Top", "Rising"],
    lastId: undefined,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = (after = undefined) => {
    const { selectedListing } = this.state;
    let url = !after
      ? `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json`
      : `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json?after=${after}`;

    fetch(url)
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          posts: result.data.children,
          lastId: result.data.after,
        })
      )
      .catch((error) => console.log(error));
  };

  setListing = (newListing) => {
    this.setState({ selectedListing: newListing }, () => this.fetch());
  };

  render() {
    const { posts, listings, selectedListing, lastId } = this.state;

    const postList = posts.map((post, index) => {
      return (
        <li key={index}>
          <Post data={post.data} />
        </li>
      );
    });

    return (
      <div>
        <Nav setListing={this.setListing} listings={listings} />

        <h2 className="text-3xl font-bold underline">
          {selectedListing} Posts from r/ReactJS
        </h2>

        <ul>{postList}</ul>

        {selectedListing !== "Rising" && (
          <button onClick={() => this.fetch(lastId)}>Ver Mais</button>
        )}
      </div>
    );
  }
}

export default App;
