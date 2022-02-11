import React from "react";

const PostBadges = (props) => {
  return (
    <div>
      {props.collections && <Badge title="coleção" />}
      {props.stickied && <Badge title="fixado" />}
    </div>
  );
};

const Badge = (props) => {
  return (
    <div className="bg-gray-600 py-1 px-2 rounded-full text-[.68rem] mr-2 mb-1 inline-block text-slate-100">
      {props.title}
    </div>
  );
};

export default PostBadges;
