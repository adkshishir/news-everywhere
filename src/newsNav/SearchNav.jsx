import React, { useState } from "react";
const SearchNav = ({ searchValue, value, onclick, onenter }) => {
  return (
    <div className="w-full overflow-x-hidden  sticky top-16 left-0  z-10 search-display h-fit ">
      <input
        className="p-2  text-xl font-bold hidden focus:translate-x-0  focus:flex hover:flex -translate-x-full w-3/6 placeholder:text-2xl hover:bg-gray-100 hover:outline hover:border-2 hover:border-blue-400  hover:outline-blue-300 focus:bg-gray-100 text-blue-900 "
        type="text"
        name="name"
        id="name"
        onChange={searchValue}
        value={value}
        onKeyDown={onenter}
        placeholder={`search...`}
      />
      {/* <div className=" ">
       
      </div> */}
    </div>
  );
};

export default SearchNav;
