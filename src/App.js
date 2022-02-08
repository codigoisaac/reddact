import { Component } from "react";
import Post from "./Post.js";
import Nav from "./Nav.js";

class App extends Component {
  state = {
    posts: [],
    selectedListing: "Hot",
    listings: ["Hot", "New", "Top", "Rising"],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const { selectedListing } = this.state;

    const url = `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => this.setState({ posts: result.data.children }))
      .then((error) => console.log(error));
  };

  setListing = (newListing) => {
    this.setState({ selectedListing: newListing }, () => this.fetch());
  };

  render() {
    const { posts, listings, selectedListing } = this.state;

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

        <h2>{selectedListing} Posts from r/ReactJS</h2>

        <ul>{postList}</ul>
      </div>
    );
  }
}

export default App;
