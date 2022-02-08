import React from "react";

const Nav = (props) => {
  const listingButtons = props.listings.map((listing, index) => {
    return (
      <button
        key={index}
        onClick={() => props.setListing(listing)}
        className="_button bg-_gray hover:bg-_purple"
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
