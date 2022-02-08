import React from "react";

const Nav = (props) => {
  const listingButtons = props.listings.map((listing, index) => {
    return (
      <button key={index} onClick={() => props.setListing(listing)}>
        {listing}
      </button>
    );
  });

  return <div>{listingButtons}</div>;
};

export default Nav;
