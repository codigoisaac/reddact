import React from "react";

const PostList = (props) => {
  const { posts } = props;

  const postList = posts.map((post, index) => {
    const { title, author } = post.data;

    return <Post key={index} title={title} author={author} />;
  });

  return <div className="my-6">{postList}</div>;
};

const Post = (props) => {
  const { title, author } = props;

  return (
    <div className="py-4 border-t border-_gray">
      <h3 className="font-bold ">{title}</h3>

      <p className="text-sm text-_gray">
        enviado à X horas por <span className="text-_purple">{author}</span>
      </p>
    </div>
  );
};

export default PostList;
