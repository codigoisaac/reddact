import { useState } from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
timeago.register("pt_BR", pt_BR);

const PostList = (props) => {
  const { posts } = props;

  const postList = posts.map((post, index) => {
    const { permalink, created_utc } = post.data;
    let imageUrl;
    let isCustomImg;

    if (!["self", "default"].includes(post.data.thumbnail)) {
      imageUrl = post.data.thumbnail;
      isCustomImg = true;
    } else {
      imageUrl = "/defaultPostImg.png";
      isCustomImg = false;
    }

    const time = new Date(created_utc * 1000).getTime();

    return (
      <Post
        key={index}
        title={post.data.title}
        author={post.data.author}
        image={imageUrl}
        isCustomImg={isCustomImg}
        time={time}
        url={"https://reddit.com" + permalink}
        isCollection={typeof post.data.collections !== "undefined"}
        isFixed={post.data.stickied}
      />
    );
  });

  return <div className="my-6">{postList}</div>;
};

const Post = (props) => {
  const {
    title,
    author,
    image,
    url,
    isCustomImg,
    time,
    isCollection,
    isFixed,
  } = props;

  return (
    <div className="border-t border-_gray">
      <div className="py-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 flex items-center sm:px-5">
        <PostImage img={image} isCustomImg={isCustomImg} />

        <PostText
          url={url}
          title={title}
          author={author}
          time={time}
          isCollection={isCollection}
          isFixed={isFixed}
        />
      </div>
    </div>
  );
};

const PostImage = (props) => {
  const [isScaled, setIsScaled] = useState(false);

  return (
    <div
      onClick={() => setIsScaled(!isScaled)}
      className={`mr-3 mt-1 min-w-[5rem] max-w-[5rem] 3xl:w-[5rem] ${
        isScaled && props.isCustomImg
          ? "scale-[2.5] origin-left transform-gpu"
          : ""
      } ${props.isCustomImg ? "cursor-pointer" : ""}`}
    >
      <img src={props.img} alt="Imagem do Post" />
    </div>
  );
};

const PostText = (props) => {
  return (
    <div>
      {props.isCollection && <div className="_postBadge">collection</div>}
      {props.isFixed && <div className="_postBadge">fixed</div>}

      <a href={props.url} target="_blank" rel="noreferrer">
        <h3 className="font-bold sm:text-[1.1rem] 2xl:text-lg 3xl:text-2xl 3xl:mb-4 hover:underline">
          {props.title}
        </h3>
      </a>

      <p className="text-sm 3xl:text-[1.4rem] text-_gray">
        enviado <TimeAgo datetime={props.time} locale="pt_BR" /> por{" "}
        <a
          href={`http://reddit.com/user/${props.author}/`}
          target="_blank"
          rel="noreferrer"
          className="text-_purple dark:text-purple-400 hover:underline"
        >
          {props.author}
        </a>
      </p>
    </div>
  );
};

export default PostList;
