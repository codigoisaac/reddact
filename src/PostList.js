import React from "react";

const PostList = (props) => {
  const { posts } = props;

  const postList = posts.map((post, index) => {
    const { title, author, permalink } = post.data;
    let imageUrl;
    let isDefaultImage;

    if (!["self", "default"].includes(post.data.thumbnail)) {
      imageUrl = post.data.thumbnail;
      isDefaultImage = false;
    } else {
      imageUrl = "/defaultPostImg.png";
      isDefaultImage = true;
    }

    return (
      <Post
        key={index}
        title={title}
        author={author}
        image={imageUrl}
        defaultImg={isDefaultImage}
        url={"https://reddit.com" + permalink}
      />
    );
  });

  return <div className="my-6">{postList}</div>;
};

const Post = (props) => {
  const { title, author, image, url, defaultImg } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className={`py-4 border-t border-_gray flex ${
          !defaultImg ? "flex-col sm:flex-row" : ""
        }`}
      >
        <div className={`mr-5 ${defaultImg ? "max-w-[4rem]" : "mb-2 sm:mb-0"}`}>
          <img src={image} alt="Imagem do Post" />
        </div>

        <div>
          <h3 className="font-bold ">{title}</h3>

          <p className="text-sm 4k:text-[1.5rem] text-_gray">
            enviado à X horas por <span className="text-_purple">{author}</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default PostList;
