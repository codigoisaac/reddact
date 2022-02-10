import React from "react";
import { MoonIcon } from "@heroicons/react/outline";

const Nav = (props) => {
  const { listings, setListing, selectedListing, changeTheme } = props;

  const listingButtons = listings.map((listing, index) => {
    return (
      <button
        key={index}
        onClick={() => setListing(listing)}
        className={`_button mx-1 basis-1/6 dark:text-gray-900 dark:hover:bg-_purple dark:hover:text-white hover:bg-_yellow hover:text-gray-900 ${
          selectedListing === listing
            ? "bg-_purple dark:bg-_yellow"
            : "bg-_gray"
        }`}
      >
        {listing}
      </button>
    );
  });

  return (
    <div className="flex justify-center items-center py-3">
      {listingButtons}

      <div className="w-6 mx-1 text-_purple dark:text-_yellow hover:scale-105">
        <MoonIcon onClick={() => changeTheme()} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
