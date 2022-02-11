import HeaderBanner from "./ui/HeaderBanner.js";
import Nav from "./ui/Nav.js";
import PageHeader from "./ui/PageHeader.js";
import PostList from "./ui/PostList.js";
import LoadMoreButton from "./ui/LoadMoreButton.js";
import NoMorePostsNote from "./ui/NoMorePostsNote.js";

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

        <PageHeader
          selectedListing={props.state.selectedListing}
          pageNumber={props.state.pageNumber}
        />

        <PostList posts={props.state.posts} />

        {["undefined", null].includes(props.state.after) ? (
          <NoMorePostsNote />
        ) : (
          <LoadMoreButton
            fetchData={props.fetchData}
            after={props.state.after}
          />
        )}
      </div>
    </div>
  );
};

export default Ui;
