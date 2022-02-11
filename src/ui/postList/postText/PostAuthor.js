import React from "react";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
timeago.register("pt_BR", pt_BR);

const PostAuthor = (props) => {
  const time = new Date(props.timestamp * 1000).getTime();

  return (
    <p className="text-sm 3xl:text-[1.4rem] text-gray-600 dark:text-gray-500">
      enviado <TimeAgo datetime={time} locale="pt_BR" /> por{" "}
      <a
        href={`http://reddit.com/user/${props.author}/`}
        target="_blank"
        rel="noreferrer"
        className="text-_purple dark:text-purple-400 hover:underline"
      >
        {props.author}
      </a>
    </p>
  );
};

export default PostAuthor;
