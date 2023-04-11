import React from "react";
import Button from "../../Button";

const CategoriesTop = ({ value, name, url }) => {
  return (
    <div className="flex w-full">
      <div className="text-[1.1rem] font-semibold">{value} </div>
      <span className="w-[.7rem] h-[.7rem] rounded-full bg-[#7d7dff] my-auto ml-1"></span>
      <span className=" border-[3px] border-[#7d7ddd] my-auto -mx-2 w-3/6 h-2 align-middle -z-10"></span>
      {name && <Button value={name} url={url} />}
    </div>
  );
};

export default CategoriesTop;
