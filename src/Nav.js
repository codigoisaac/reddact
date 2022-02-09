import React from "react";

const Nav = (props) => {
  const { listings, setListing, selectedListing } = props;

  const listingButtons = listings.map((listing, index) => {
    return (
      <button
        key={index}
        onClick={() => setListing(listing)}
        className={`_button mx-2 basis-1/6 ${
          selectedListing === listing ? "bg-_purple" : "bg-_gray"
        }`}
      >
        {listing}
      </button>
    );
  });

  return (
    <div className="flex justify-center items-center py-3">
      {listingButtons}
    </div>
  );
};

export default Nav;
