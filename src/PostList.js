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
        comments={post.data.num_comments}
        ups={post.data.ups - 1}
      />
    );
  });

  return <div className="my-6">{postList}</div>;
};

const Post = (props) => {
  return (
    <div className="border-t border-_gray">
      <div className="py-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 flex items-center sm:px-5">
        <PostImage img={props.image} isCustomImg={props.isCustomImg} />

        <PostText
          url={props.url}
          title={props.title}
          author={props.author}
          time={props.time}
          isCollection={props.isCollection}
          isFixed={props.isFixed}
          comments={props.comments}
          ups={props.ups}
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
      {props.isCollection && <PostBadge title="coleção" />}
      {props.isFixed && <PostBadge title="fixado" />}

      <a href={props.url} target="_blank" rel="noreferrer">
        <h3 className="font-bold sm:text-[1.1rem] 2xl:text-lg 3xl:text-2xl 3xl:mb-4 hover:underline">
          {props.title}
        </h3>
      </a>

      <p className="text-sm 3xl:text-[1.4rem] text-gray-600 dark:text-gray-500">
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

      <PostStats comments={props.comments} ups={props.ups} />
    </div>
  );
};

const PostBadge = (props) => {
  return (
    <div className="bg-gray-600 py-1 px-2 rounded-full text-[.68rem] mr-2 mb-1 inline-block text-slate-100">
      {props.title}
    </div>
  );
};

const PostStats = (props) => {
  return (
    <div className="mt-[.2rem] text-xs">
      <Stat title="ups" score={props.ups} />
      <Stat title="comentários" score={props.comments} />
    </div>
  );
};

const Stat = (props) => {
  return (
    <div className="inline-block mr-3 text-gray-600 dark:text-gray-500">
      {props.title}: {props.score}
    </div>
  );
};

export default PostList;
