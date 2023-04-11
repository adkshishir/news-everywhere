import React from "react";
import { Link } from "react-router-dom";
const Topsingle = ({ name }) => {
  return (
    <li className="px-0.5 text-[0.95rem] cursor-pointer  font-semibold  transition-all text-white ">
      {name}
    </li>
  );
};

export default Topsingle;
