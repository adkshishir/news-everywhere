import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
const Bigbox = ({
  dis,
  singleNewsdata,
  index,
  category,
  activeNews,
  searchValue,
}) => {
  const handleClick = () => {
    singleNewsdata(dis);
    console.log(searchValue);
    // navgate(
    //   `/${
    //     searchValue
    //       ? "/search?q=" + searchValue + "&id=" + index
    //       : category + "&id=" + index
    //   }`
    // );
    window.scrollTo({ top: 0 });
  };
  return (
    <div
      className={`big-box item item${index} overflow-x-hidden relative `}
      onClick={handleClick}
    >
      <Link to={category ? `/${category}/${index}` : "/reading"}>
        {dis.image ? (
          <img
            className="w-full h-[250px] object-cover rounded-t-md  "
            src={dis.image}
            alt="photo of the news"
          />
        ) : (
          <></>
        )}
        <h1
          // style={{ lineHeight: "0.99" }}
          className="title text-3xl text-white font-thin bg-[rgba(0,0,0,0.7)]  p-4 z-50 "
        >
          {dis.title}
        </h1>
        {/* <div className="  font-[poppins] text-[16px] text-white bg-[rgba(0,0,0,0.6)] p-4 ">
          {dis.description}
        </div> */}
      </Link>
    </div>
  );
};

export default Bigbox;
