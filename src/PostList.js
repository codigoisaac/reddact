import React from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
timeago.register("pt_BR", pt_BR);

const PostList = (props) => {
  const { posts } = props;

  const postList = posts.map((post, index) => {
    const { title, author, permalink, created_utc } = post.data;
    let imageUrl;
    let isDefaultImage;

    if (!["self", "default"].includes(post.data.thumbnail)) {
      imageUrl = post.data.thumbnail;
      isDefaultImage = false;
    } else {
      imageUrl = "/defaultPostImg.png";
      isDefaultImage = true;
    }

    const time = new Date(created_utc * 1000).getTime();

    return (
      <Post
        key={index}
        title={title}
        author={author}
        image={imageUrl}
        defaultImg={isDefaultImage}
        time={time}
        url={"https://reddit.com" + permalink}
      />
    );
  });

  return <div className="my-6">{postList}</div>;
};

const Post = (props) => {
  const { title, author, image, url, defaultImg, time } = props;

  return (
    <div
      className={`py-4 border-t border-_gray flex ${
        !defaultImg ? "flex-col sm:flex-row" : ""
      }`}
    >
      {/* image */}
      <div
        className={`mr-5 ${
          defaultImg ? "max-w-[4rem] 3xl:max-w-[5rem]" : "mb-2 sm:mb-0"
        }`}
      >
        <img src={image} alt="Imagem do Post" />
      </div>

      {/* text */}
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="font-bold sm:text-[1.1rem] 2xl:text-lg 3xl:text-2xl 3xl:mb-4">
            {title}
          </h3>
        </a>

        <p className="text-sm 3xl:text-[1.4rem] text-_gray">
          enviado <TimeAgo datetime={time} locale="pt_BR" /> por{" "}
          <a
            href={`http://reddit.com/user/${author}/`}
            target="_blank"
            rel="noreferrer"
            className="text-_purple"
          >
            {author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PostList;
