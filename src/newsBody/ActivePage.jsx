import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  sports,
  bussiness,
  health,
  entertainment,
  nation,
  world,
  general,
  top,
  science,
} from "../newsIsHere";
import DataHolder from "./DataHolder";
const ActivePage = ({ data, onclick, searchValue, category }) => {
  const [selectedObject, setSelectedObject] = useState(
    JSON.parse(localStorage.getItem("selectedObject"))
  );
  const isRefreshed = useRef();
  const url = window.location.href;

  useEffect(() => {
    setSelectedObject(JSON.parse(localStorage.getItem("selectedObject")));
    isRefreshed.current = false;
    document.title = selectedObject.title;
  }, [data]);
  useEffect(() => {
    isRefreshed.current = true;
  }, []);

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content={
            isRefreshed.current ? selectedObject.description : data.description
          }
        />
        <meta
          property="og:title"
          content={isRefreshed.current ? selectedObject.title : data.title}
        />
        <meta
          property="og:description"
          content={
            isRefreshed.current ? selectedObject.description : data.description
          }
        />
        <meta
          property="og:image"
          content={isRefreshed.current ? selectedObject.image : data.image}
        />
        <meta property="og:url" content={url} />
      </Helmet>
      <main className={`flex justify-center `}>
        <div className=" max-w-7xl shadow-lg gap-3 lg:px-3 px-1 bg-white">
          <div className="xl:flex">
            <div className="  lg:p-4 p-2 mb-4 shadow-mg lg:w-4/6 bg-white rounded-sm shadow-sm">
              <h1 className="text-center text-2xl text-blue-900 font-bold my-4 font-[poppins] ">
                {isRefreshed.current ? selectedObject.title : data.title}
              </h1>
              <img
                className=" max-h-[400px] w-[96%] object-cover rounded-t-md mb-4 mx-auto  "
                src={isRefreshed.current ? selectedObject.image : data.image}
                alt="news photo which is missing"
              />
              <h3 className="text-xl text-blue-900 my-6">
                publish Date:
                {isRefreshed.current
                  ? selectedObject.publishedAt
                  : data.publishedAt}
              </h3>
              <h3
                style={{ lineHeight: "1.1" }}
                className="text-lg text-sky-800 mb-5 font-bold text-justify font-[poppins]"
              >
                {isRefreshed.current
                  ? selectedObject.description
                  : data.description}
              </h3>
              <p className="text-md text-sky-800 mb-5 font-semibold text-justify font-[poppins]">
                {isRefreshed.current ? selectedObject.content : data.content}
              </p>
              <p>
                for More :
                <a
                  href={isRefreshed.current ? selectedObject.url : data.url}
                  target="_blank"
                >
                  {isRefreshed.current ? selectedObject.url : data.url}
                </a>
              </p>
            </div>
            <amp-ad
              width="100vw"
              height="320"
              type="adsense"
              data-ad-client="ca-pub-5060645674260174"
              data-ad-slot="8959064369"
              data-auto-format="rspv"
              data-full-width=""
            >
              <div overflow=""></div>
            </amp-ad>
          </div>
          <div
            className="mb-2 grid gap-4 xl:px-20 lg:px-16 sm:px-10 p-5 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl m-auto bg-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {top
              ? top.map(function (dis, key) {
                  return (
                    <DataHolder
                      dis={dis}
                      key={key}
                      index={key}
                      singleNewsdata={onclick}
                      searchValue={searchValue}
                      category={category}
                      activeNews={top}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivePage;
