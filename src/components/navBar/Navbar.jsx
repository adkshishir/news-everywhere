import React, { useEffect, useState } from "react";
import Rightnav from "./Rightnav";
import Leftnav from "./Leftnav";
import Topnav from "./Topnav";
const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [lastPosition, setlastPosition] = useState(0);
  const [direction, setdirection] = useState(" ");
  function controlTime() {
    const date = new Date();
    return date.getSeconds();
  }
  setInterval(controlTime, 1000);
  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > lastPosition && currentPosition > 200) {
        setdirection("opacity-0");
      } else {
        setdirection("opacity-100");
      }
      setlastPosition(currentPosition);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastPosition && controlTime() % 2]);
  const toggle = (value) => {
    setToggled(!toggled);
  };
  return (
    <header
      className={` bg-[#151515] border-b-[1px] transition-opacity border-black ${direction}  sticky -top-12 z-[2] `}
    >
      <div>
        <Topnav />
      </div>

      {/*  dark:bg-[#181818] */}
      <div className={`   bg-white lg:flex  w-full  justify-center `}>
        <div
          className="lg:hidden cursor-pointer border-2  m-2 p-2"
          onClick={toggle}
        >
          toggle
        </div>

        <div className="  border-b bg-white hidden  lg:flex w-full  justify-center  ">
          <Leftnav />
          <Rightnav />
          <hr />
        </div>
        {toggled && (
          <div className="  border-b bg-white lg:hidden w-full  justify-center  ">
            <Leftnav />
            <Rightnav />
            <hr />
          </div>
        )}
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
