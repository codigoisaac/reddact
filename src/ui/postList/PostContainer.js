import React from "react";
import PostImage from "./PostImage";
import PostText from "./PostText";

const PostContainer = (props) => {
  const { postData } = props;

  return (
    <div className="border-t border-_gray">
      <div className="py-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 flex items-center sm:px-5">
        <PostImage thumbnail={postData.thumbnail} />

        <PostText postData={postData} />
      </div>
    </div>
  );
};

export default PostContainer;
