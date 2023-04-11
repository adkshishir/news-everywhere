import React from "react";
import { useNavigate } from "react-router";
const Button = ({ value, onclick, url }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
    // onclick();
  };
  return (
    <button
      className="px-3 py-1 w-fit font-semibold text-md text-white bg-[#8484ff]"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
