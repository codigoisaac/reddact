import PostList from "./PostList.js";
import Nav from "./Nav.js";
import { PlusIcon } from "@heroicons/react/solid";

const Ui = (props) => {
  return (
    <div className="dark:bg-neutral-900 dark:text-white min-h-screen">
      <HeaderBanner />

      <div
        className="mx-2 sm:mx-12 md:mx-32 lg:mx-48 xl:mx-80 2xl:mx-96 3xl:mx-96 3xl:text-[1.8rem]"
        id="innerDiv"
      >
        <Nav
          setListing={props.setListing}
          listings={props.state.listings}
          selectedListing={props.state.selectedListing}
          changeTheme={props.changeTheme}
        />

        <Title
          selectedListing={props.state.selectedListing}
          pageNumber={props.state.pageNumber}
        />

        <PostList posts={props.state.posts} />

        {props.after ? (
          <LoadMore fetchPosts={props.fetchPosts} after={props.state.after} />
        ) : (
          <NoMorePostsNote />
        )}
      </div>
    </div>
  );
};

const HeaderBanner = () => {
  return (
    <div className="text-3xl text-center text-white bg-_purple p-3 font-semibold 3xl:p-5 3xl:text-[2.7rem] 3xl:font-bold">
      REACT<span className="text-_yellow">JS</span>
    </div>
  );
};

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

export default Ui;
