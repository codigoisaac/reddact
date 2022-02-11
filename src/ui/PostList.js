import React from "react";
import PostContainer from "./postList/PostContainer";

const PostList = (props) => {
  const { posts } = props;

  const postList = posts.map((post, index) => {
    return <PostContainer key={index} postData={post.data} />;
  });

  return <div className="my-6">{postList}</div>;
};

export default PostList;
