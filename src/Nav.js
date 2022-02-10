import React from "react";
import { MoonIcon } from "@heroicons/react/outline";

const Nav = (props) => {
  const { listings, setListing, selectedListing, changeTheme } = props;

  const listingButtons = listings.map((listing, index) => {
    return (
      <button
        key={index}
        onClick={() => setListing(listing)}
        className={`_button mx-1 basis-1/6 ${
          selectedListing === listing
            ? "bg-_purple"
            : "bg-_gray dark:text-gray-900"
        }`}
      >
        {listing}
      </button>
    );
  });

  return (
    <div className="flex justify-center items-center py-3">
      {listingButtons}

      <div className="w-6 mx-1 text-_purple dark:text-_yellow">
        <MoonIcon onClick={() => changeTheme()} />
      </div>
    </div>
  );
};

export default Nav;
