import React from "react";

const PostTitle = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <h3 className="font-bold sm:text-[1.1rem] 2xl:text-lg 3xl:text-2xl 3xl:mb-4 hover:underline">
        {props.title}
      </h3>
    </a>
  );
};

export default PostTitle;
