import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import List from "../List";

const Dropdown = ({ allData, dropDown, lang }) => {
  const [displayMenu, setDisplayMenu] = useState(0);
  const toggle = () => {
    setDisplayMenu(0);
  };
  return (
    <div className="dropdown z-20 px-4 py-1 bg-[rgba(0,0,0,0.5)]">
      <button
        onClick={() => setDisplayMenu(!displayMenu)}
        className=" text-lg mr-2 font-semibold  hover:text-orange-400 p-0"
      >
        {dropDown}
        <FontAwesomeIcon icon={faSortDown} />
      </button>

      {displayMenu ? (
        <ul className="dropdown-menu max-h-56 overflow-y-scroll scroll-smooth ">
          {allData.map(function (alldata, index) {
            return (
              <List
                alldata={alldata}
                key={index}
                lang={lang}
                onclick={toggle}
                categories={false}
              />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
