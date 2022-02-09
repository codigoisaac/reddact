import { Component } from "react";
import PostList from "./PostList.js";
import Nav from "./Nav.js";
import HeaderBanner from "./HeaderBanner.js";
import "./index.css";
import { PlusIcon } from "@heroicons/react/solid";

class App extends Component {
  state = {
    posts: [],
    selectedListing: "Hot",
    listings: ["Hot", "New", "Top", "Rising"],
    after: undefined,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = (after = undefined) => {
    const { selectedListing } = this.state;
    let url = !after
      ? `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json`
      : `https://www.reddit.com/r/reactjs/${selectedListing.toLowerCase()}.json?after=${after}`;

    fetch(url)
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          posts: result.data.children,
          after: result.data.after,
        })
      )
      .catch((error) => console.log(error));
  };

  setListing = (newListing) => {
    this.setState({ selectedListing: newListing }, () => this.fetchPosts());
  };

  render() {
    const { posts, listings, selectedListing, after } = this.state;

    return (
      <div>
        <HeaderBanner />

        <div className="mx-2 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-80 2xl:mx-96 4k:mx-96 4k:text-[1.8rem]">
          <Nav setListing={this.setListing} listings={listings} />

          <Title selectedListing={selectedListing} />

          <PostList posts={posts} />

          <LoadMore
            selectedListing={selectedListing}
            fetchPosts={this.fetchPosts}
            after={after}
          />
        </div>
      </div>
    );
  }
}

// Title component
const Title = (props) => {
  const { selectedListing } = props;

  return (
    <h2 className="text-xl 4k:text-[2.5rem] text-center font-bold mt-4">
      {selectedListing} Posts from r/ReactJS
    </h2>
  );
};

// LoadMore button component
const LoadMore = (props) => {
  const { selectedListing, after, fetchPosts } = props;

  return (
    selectedListing !== "Rising" && (
      <div className="flex justify-center py-3 mb-3">
        <button
          onClick={() => fetchPosts(after)}
          className="_button bg-_purple w-full flex justify-center items-center"
        >
          <PlusIcon className="w-4 mr-2" />
          Ver mais
        </button>
      </div>
    )
  );
};

export default App;
