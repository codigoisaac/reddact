import React from "react";
import {
  ChatAltIcon,
  ArrowCircleUpIcon,
  StarIcon,
} from "@heroicons/react/outline";

const PostStats = (props) => {
  return (
    <div className="mt-[.2rem] text-xs">
      {props.awards >= 1 && (
        <Stat
          icon={<StarIcon className="text-_yellow" />}
          score={props.awards}
        />
      )}
      <Stat icon={<ArrowCircleUpIcon />} score={props.ups} />
      <Stat icon={<ChatAltIcon />} score={props.comments} />
    </div>
  );
};

const Stat = (props) => {
  return (
    <div className="mr-3 text-gray-600 dark:text-gray-500 inline-flex">
      <span className="w-[1rem] mr-1">{props.icon}</span>
      <span>{props.score}</span>
    </div>
  );
};

export default PostStats;
