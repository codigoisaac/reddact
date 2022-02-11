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
          window.scrollTo(0, 0);
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
      <div className="dark:bg-neutral-900 dark:text-white min-h-screen">
        <HeaderBanner />

        <div
          className="mx-2 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-80 2xl:mx-96 3xl:mx-96 3xl:text-[1.8rem]"
          id="innerDiv"
        >
          <Nav
            setListing={this.setListing}
            listings={listings}
            selectedListing={selectedListing}
            changeTheme={this.changeTheme}
          />

          <Title selectedListing={selectedListing} pageNumber={pageNumber} />

          <PostList posts={posts} />

          {after ? (
            <LoadMore fetchPosts={this.fetchPosts} after={after} />
          ) : (
            <NoMorePostsNote />
          )}
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
      <h2 className="text-xl 3xl:text-[2.5rem] font-bold mt-4 3xl:my-16 w-fit mx-auto hover:underline">
        <a
          href={`https://reddit.com/r/reactjs/${selectedListing.toLowerCase()}`}
          target="_blank"
          rel="noreferrer"
        >
          {selectedListing} Posts from r/ReactJS
        </a>
      </h2>

      <small>{pageNumberDisplay}</small>
    </div>
  );
};

// LoadMore button component
const LoadMore = (props) => {
  const { after, fetchPosts } = props;

  return (
    <div className="py-3">
      <button
        onClick={() => fetchPosts(after)}
        className="_button w-full flex justify-center items-center mx-0 mb-5 bg-_purple hover:bg-_yellow hover:text-gray-900"
      >
        <PlusIcon className="w-4 mr-2" />
        Ver mais
      </button>
    </div>
  );
};

const NoMorePostsNote = () => {
  return (
    <div className="py-3 text-center text-gray-700 dark:text-gray-500 text-sm">
      Não há mais posts para mostrar.{" "}
      <span
        className="underline cursor-pointer text-_purple dark:text-purple-400 hover:text-purple-400 dark:hover:text-_purple"
        onClick={() => window.scrollTo(0, 0)}
      >
        Voltar ao topo.
      </span>
    </div>
  );
};

export default App;
