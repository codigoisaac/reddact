import { useState } from "react";

const PostImage = (props) => {
  const [isScaled, setIsScaled] = useState(false);

  let imageUrl;
  let isCustomImg;

  if (["self", "default"].includes(props.thumbnail)) {
    isCustomImg = false;
    imageUrl = "/defaultPostImg.png";
  } else {
    isCustomImg = true;
    imageUrl = props.thumbnail;
  }

  return (
    <div
      onClick={() => setIsScaled(!isScaled)}
      className={`mr-3 mt-1 min-w-[5rem] max-w-[5rem] 3xl:w-[5rem] ${
        isScaled && isCustomImg ? "scale-[2.5] origin-left transform-gpu" : ""
      } ${isCustomImg ? "cursor-pointer" : ""}`}
    >
      <img src={imageUrl} alt="Imagem do Post" />
    </div>
  );
};

export default PostImage;
