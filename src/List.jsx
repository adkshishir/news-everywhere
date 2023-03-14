import React from "react";
import { Link } from "react-router-dom";

const List = ({ alldata, lang, onclick, categories }) => {
  const handleClick = () => {
    lang(alldata.value);
    onclick();
  };
  return (
    <>
      <li
        onClick={handleClick}
        className={
          "px-4 py-1 cursor-pointer z-30  hover:bg-gradient-to-tr hover:from-red-100 hover:to-blue-100 hover:text-black font-[poppins] bg-[rgba(0,0,0,0.5)] "
        }
      >
        <Link to={`/${categories ? alldata.value : ""}`}>{alldata.name}</Link>
      </li>
    </>
  );
};

export default List;
