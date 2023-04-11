import React from "react";

const PopularSingle = ({ image, heading, date }) => {
  return (
    <div className="flex bg-white m-2 p-2 ">
      <img
        src={image}
        alt={"image of the news"}
        className={" w-[100px] h-[100px] rounded-full bg-red-50"}
      />
      <div className=" my-auto">
        <h1 className=" px-2 text-md font-bold">{heading}</h1>
        <h2 className="px-2">{date}</h2>
      </div>
    </div>
  );
};

export default PopularSingle;
