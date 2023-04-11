import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const TextInsidePhoto = ({ heading, image, date, className, url }) => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
      className={
        "relative align-bottom h-ful overflow-hidden m-1 rounded-xl " +
        className
      }
    >
      <Link to={url}>
        <div className=" overflow-hidden">
          <Image image={image} className={className} />
        </div>
        <div className=" absolute top-3/4 h-1/4 w-full left-0 bg-[#00000034]  rounded-lg">
          <h1 className="h1 px-2 text-2xl font-bold z-10  "> {heading}</h1>
          <h2 className="h1 text-sm px-2 ">{date}|</h2>
        </div>
      </Link>
    </div>
  );
};

export default TextInsidePhoto;
