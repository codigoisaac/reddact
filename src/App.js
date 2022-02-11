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
    this.fetchData();
  }

  fetchData = (after = undefined) => {
    const { selectedListing } = this.state;

    let url = !after
      ? `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json`
      : `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json?after=${after}`;

    fetch(url)
      .then((result) => result.json())
      .then((result) => this.setPostsData(result))
      .then(() => this.increasePageNumber())
      .catch((error) => alert(error));
  };

  setPostsData = (data) => {
    this.setState(
      { posts: data.data.children, after: data.data.after },
      this.delayAndScrollToTop()
    );
  };

  increasePageNumber = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  delayAndScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);
  };

  setListing = (newListing) => {
    this.setState({ selectedListing: newListing, pageNumber: 0 }, () =>
      this.fetchData()
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
        fetchData={this.fetchData}
      />
    );
  }
}

export default App;
