import React from "react";
import PostBadges from "./postText/PostBadges";
import PostTitle from "./postText/PostTitle";
import PostAuthor from "./postText/PostAuthor";
import PostStats from "./postText/PostStats";

const PostText = (props) => {
  const { postData } = props;

  return (
    <div style={{ hyphens: "auto", wordBreak: "break-word" }}>
      <PostBadges
        collections={postData.collections}
        stickied={postData.stickied}
      />

      <PostTitle url={postData.url} title={postData.title} />

      <PostAuthor timestamp={postData.created_utc} author={postData.author} />

      <PostStats
        comments={postData.num_comments}
        ups={postData.ups}
        awards={postData.total_awards_received}
      />
    </div>
  );
};

export default PostText;
