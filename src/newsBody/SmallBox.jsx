import React from "react";
import { Link } from "react-router-dom";
const SmallBox = ({
  dis,
  index,
  singleNewsdata,
  searchValue,
  category,
  activeNews,
}) => {
  const handleClick = () => {
    singleNewsdata(dis);
    window.scrollTo({ top: 0 });
  };
  return (
    <div className={` small-box overflow-hidden`} onClick={handleClick}>
      <Link to={category ? `/${category}/${index}` : "/reading"}>
        {dis.image ? (
          <img
            className="w-full h-[200px] object-cover rounded-t-md mb-4 "
            src={dis.image}
            alt="photo of the news"
          />
        ) : (
          <></>
        )}
        <h1
          // style={{ lineHeight: "0.99" }}
          className="title text-[1.2rem] text-black font-thin mb-4 mx-2"
        >
          {dis.title}
        </h1>
        <div className="w-11/12 h-0.5 bg-orange-100 rounded-full  m-auto"></div>
      </Link>
    </div>
  );
};

export default SmallBox;
