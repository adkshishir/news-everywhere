import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
const TextbelowImag = ({ image, heading, date, url }) => {
  return (
    <Link to={url}>
      <div
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
        className=" bg-white rounded-lg p-0.5 my-2 overflow-hidden m-1 shadow-md shadow-blue-100"
      >
        <Image image={image} className={" h-[200px]"} />
        <h1 className=" px-2 text-md font-bold ">{heading}</h1>
        <h2 className="px-2">{date}</h2>
      </div>
    </Link>
  );
};

export default TextbelowImag;
