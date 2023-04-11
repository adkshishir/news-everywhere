import React from "react";
import { Link } from "react-router-dom";
Link;
const RightnavSingle = ({ name, url }) => {
  return (
    <li
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
      className="px-3 cursor-pointer mx-2 my-auto text-[1.05rem]  font-semibold  transition-all hover:text-orange-500 "
    >
      <Link to={`/${url}`}> {name}</Link>
    </li>
  );
};

export default RightnavSingle;
