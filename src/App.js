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
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }, 400)
      )
      .catch((error) => console.log(error));
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
    const { posts, listings, selectedListing, after, pageNumber } = this.state;

    return (
      <div className="bg-white dark:bg-neutral-900 dark:text-white">
        <HeaderBanner />

        <div className="mx-2 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-80 2xl:mx-96 3xl:mx-96 3xl:text-[1.8rem]">
          <Nav
            setListing={this.setListing}
            listings={listings}
            selectedListing={selectedListing}
            changeTheme={this.changeTheme}
          />

          <Title selectedListing={selectedListing} pageNumber={pageNumber} />

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
  const { selectedListing, pageNumber } = props;

  let pageNumberDisplay;

  if (pageNumber === 0) {
    pageNumberDisplay = "carregando...";
  } else {
    pageNumberDisplay =
      selectedListing === "Rising" ? "página única" : "página " + pageNumber;
  }

  return (
    <div className="text-center">
      <h2 className="text-xl 3xl:text-[2.5rem] font-bold mt-4 3xl:my-16">
        {selectedListing} Posts from r/ReactJS
      </h2>

      <small>{pageNumberDisplay}</small>
    </div>
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
          className="_button bg-_purple w-full flex justify-center items-center mx-0"
        >
          <PlusIcon className="w-4 mr-2" />
          Ver mais
        </button>
      </div>
    )
  );
};

export default App;
