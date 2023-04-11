import React, { useEffect, useState } from "react";
import Topsingle from "./Topsingle";

const Topnav = () => {
  const time = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [date, setDate] = useState({
    year: time.getFullYear(),
    month: months[time.getMonth()],
    day: time.getDay(),
  });

  return (
    <nav className="flex justify-between mx-auto xl:px-[10%] py-2 bg-[#151515] text-white list-none ">
      {/* even thought this is left we are calling rightsingle nav because rightsingle nav is independent to other components */}
      <div className="flex px-1 ">
        {" "}
        <Topsingle name={"Today"} />|
        <Topsingle name={date.day} />,
        <Topsingle name={date.month} />
        <Topsingle name={date.year} />
      </div>
      <div className="lg:flex hidden  align-middle w">
        | <Topsingle name={"facebook"} />|
        <Topsingle name={"insta"} />|
        <Topsingle name={"twitter"} />|
        <Topsingle name={"youtube"} />|
      </div>
    </nav>
  );
};

export default Topnav;
