import React from "react";

const Image = ({ image, className }) => {
  return (
    image && (
      <img
        className={`w-full transition-all rounded-t-xl hover:scale-[101%] object-cover  ${className} `}
        src={image}
        alt={"photos of the blog "}
      />
    )
  );
};

export default Image;
