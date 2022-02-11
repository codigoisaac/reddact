import { Component } from "react";
import "./index.css";
import Ui from "./Ui.js";

class App extends Component {
  state = {
    posts: [],
    selectedListing: "Hot",
    listings: ["Hot", "New", "Top", "Rising"],
    after: undefined,
    pageNumber: 0,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = (after = undefined) => {
    const { selectedListing, pageNumber } = this.state;

    let url = !after
      ? `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json`
      : `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json?after=${after}`;

    fetch(url)
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          posts: result.data.children,
          after: result.data.after,
          pageNumber: pageNumber + 1,
        })
      )
      .then(() =>
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 400)
      )
      .catch((error) => alert(error));
  };

  setListing = (newListing) => {
    this.setState({ selectedListing: newListing, pageNumber: 0 }, () =>
      this.fetchPosts()
    );
  };

  changeTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  render() {
    return (
      <Ui
        state={this.state}
        changeTheme={this.changeTheme}
        setListing={this.setListing}
        fetchPosts={this.fetchPosts}
      />
    );
  }
}

export default App;
