import React from "react";

const PageHeader = (props) => {
  const { selectedListing, pageNumber } = props,
    pageNumberDisplay =
      pageNumber === 0 ? "carregando..." : "página " + pageNumber;

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

export default PageHeader;
