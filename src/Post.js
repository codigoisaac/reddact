import React from "react";

const Post = (props) => {
  const { title, selftext, created, author } = props.data;
  // date variables
  const createdDate = new Date(created * 1000),
    day = createdDate.getDay(),
    month = createdDate.getMonth() + 1,
    year = createdDate.getFullYear(),
    hours = createdDate.getHours(),
    mins = createdDate.getMinutes(),
    dateDisplay = day + "/" + month + "/" + year + ", " + hours + ":" + mins;

  return (
    <div className="my-16">
      <h3 className="font-bold">{title}</h3>

      {/* todo: limit characters */}
      <p>{selftext}</p>

      {/* todo: time ago */}
      <p className="mt-3">
        enviado em {dateDisplay} por {author}
      </p>
    </div>
  );
};

export default Post;
