import React from "react";
import { PlusIcon } from "@heroicons/react/solid";

const LoadMoreButton = (props) => {
  const { after, fetchData } = props;

  return (
    <div className="py-3">
      <button
        onClick={() => fetchData(after)}
        className="_button w-full flex justify-center items-center mx-0 mb-5 bg-_purple hover:bg-_yellow hover:text-gray-900"
      >
        <PlusIcon className="w-4 mr-2" />
        Ver mais
      </button>
    </div>
  );
};

export default LoadMoreButton;
