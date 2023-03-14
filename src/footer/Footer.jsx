import { fa0, faChessBishop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// import styles from "./Footer.module.css";
import shortImg from "../images/short.png";
const Footer = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <footer
      className={
        "grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 bg-black text-white justify-between object-center align-middle mt-2 p-4 h-fit"
      }
    >
      <a
        href="/"
        className={" justify-center align-middle object-center grid "}
      >
        <img className="h-12 w-12 m-auto " src={shortImg} alt="Site logo" />
        <p>News-everywhere</p>
      </a>
      <div className={""}>
        <ul className="lg:flex grid justify-center lg:justify-between align-middle text-center ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
      <div
        className={
          " col-span-1 lg:col-span-2 xl:col-span-3 flex justify-between w-2/6 mx-auto my-2"
        }
      >
        <a href="https://twitter.com/Adkshishir65" target="_blank">
          <svg
            viewBox="0 0 24 24"
            height="40"
            className=" hover:fill-[#1DA1F2] fill-white"
          >
            <path d="M22.46 5.54c-.8.36-1.66.6-2.55.71a4.26 4.26 0 0 0 1.86-2.34 8.54 8.54 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.26 3.88 12.15 12.15 0 0 1-8.82-4.47 4.26 4.26 0 0 0 1.32 5.68 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.15 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 4.02 2.96 8.53 8.53 0 0 1-5.01 1.72 8.6 8.6 0 0 1-.99-.06 12.07 12.07 0 0 007.36 2.52c7.86 0 12.14-6.51 12.14-12.14l-.01-.55a8.76 8.76 0 0 0 2.14-2.26z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/gtmanjana88" target="_blank">
          <svg
            className=" fill-white hover:fill-blue-500 h-9"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            height="40"
          >
            <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/adhikari_shishir_/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 640 640"
            className="fill-white hover:bg-gradient-to-tr hover:from-red-400 hover:to-blue-400 hover:rounded-lg"
          >
            <path d="M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z" />
          </svg>
        </a>
      </div>
      <div
        className={" xl:col-span-3 lg:col-span-2 col-span-1  text-center mt-3"}
      >
        <p>&copy; {year} News-everywhere. All rights reserved.</p>
        <p>
          Disclaimer: This website is for informational purposes only and does
          not provide financial advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
