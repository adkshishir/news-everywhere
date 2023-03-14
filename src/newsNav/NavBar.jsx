import React, { useEffect, useState } from "react";
import Dropdown from "./DropDown";
import language, { country, category } from "../countryAndLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import List from "../List";
import image from "../images/short.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ lang, countryName, categorys, handleApi }) => {
  const [day, setDay] = useState();
  const [date, setDate] = useState();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  useEffect(() => {
    const dates = new Date();
    const formattedDate = formatter.format(dates);
    setDay(daysOfWeek[dates.getDay()]);
    setDate(formattedDate);
  });
  const [show, setShow] = useState(0);
  const toggle = () => {
    setShow(false);
  };
  return (
    <header className="sticky lg:-top-[115px] -top-[87px] left-0  z-10">
      <nav className=" text-slate-600 font-bold border-b-2 border-b-slate-900 pb-0.5 pl-4">
        {date}/ {day}
      </nav>
      <nav className=" justify-center shadow-md shadow-slate-400  flex  border-b-4 bg-gradient-to-r from-red-900 to-blue-900 border-orange-200 ">
        <Link to="/">
          <img
            src={image}
            alt="logo"
            className=" lg:w-20 lg:h-20 md:h-14 md:w-14 w-12 h-12 sm:flex hidden"
          />
        </Link>
        <Link
          className=" text-white lg:text-7xl sm:text-5xl text-4xl md:6xl font-extrabold shadow-md web-name   px-3  cursor-pointer flex "
          to="/"
        >
          NEWS-EVERYWHERE
        </Link>
      </nav>
      <div className="w-full hidden lg:flex font-semibold text-xl justify-center bg-[rgba(0,0,0,0.5)] text-white py-0.5   border-b-4 border-orange-100  ">
        <ul className=" flex  ">
          <label
            htmlFor="name"
            className=" text-2xl bg-[rgba(0,0,0,0.5)] hover:bg-gradient-to-tr hover:from-red-100 my-auto hover:to-blue-100 hover:text-black  cursor-pointer h-full px-4 text-orange-300 "
          >
            <div className=" animate-pulse">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </label>
          {category.map(function (cat, index) {
            return (
              <List
                alldata={cat}
                key={index}
                lang={categorys}
                onclick={toggle}
                categories={true}
              />
            );
          })}
        </ul>

        <Dropdown allData={language} dropDown={"Language"} lang={lang} />
      </div>
      <div className=" lg:hidden ">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={
            "text-[2rem]  w-fit pr-3 pl-2 mt-2 rounded-b-xl h-fit  bg-gradient-to-tr from-red-100 to-blue-100 "
          }
        >
          {show ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {show ? (
          <div className="text-xl  z-10 w-full top-7 p-4  left-0 grid bg-gradient-to-bl text-white from-blue-300 to-red-300 ">
            <img src={image} className="h-14 w-14 " />
            <ul className="">
              <label
                htmlFor="name"
                className=" text-2xl bg-[rgba(0,0,0,0.5)] hover:bg-gradient-to-tr hover:from-red-100 my-auto hover:to-blue-100 hover:text-black    cursor-pointer "
              >
                <div className="w-full bg-[rgba(0,0,0,0.5)] pl-4 hover:bg-gradient-to-tr hover:from-red-100 my-auto hover:to-blue-100 hover:text-black">
                  {" "}
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </label>
              {category.map(function (cat, index) {
                return (
                  <List
                    alldata={cat}
                    key={index}
                    lang={categorys}
                    categories={true}
                    onclick={toggle}
                  />
                );
              })}
            </ul>

            <Dropdown allData={language} dropDown={"Language"} lang={lang} />
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default NavBar;
