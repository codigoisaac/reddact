import { Component } from "react";
import Post from "./Post.js";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const url = "https://www.reddit.com/r/reactjs/hot.json";

    fetch(url)
      .then((result) => result.json())
      .then((result) => this.setState({ posts: result.data.children }));
  }

  render() {
    const { posts } = this.state;

    const items = posts.map((post, index) => {
      return (
        <li key={index}>
          <Post data={post.data} />
        </li>
      );
    });

    return <ul>{items}</ul>;
  }
}

export default App;
