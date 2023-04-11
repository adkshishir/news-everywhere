import React from "react";

const OneData = ({ value, bg }) => {
  return (
    <div
      className={`px-3 py-2 text-justify flex   font-semibold border-2 border-gray-300 text-lg cursor-default `}
    >
      {value ? value : "---"}
      <div
        className={`w-3 h-3 my-auto ml-1 rounded-full ${bg} float-right`}
      ></div>
    </div>
  );
};

export default OneData;
