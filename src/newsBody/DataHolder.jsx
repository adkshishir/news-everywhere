import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bigbox from "./Bigbox";
import SmallBox from "./SmallBox";
import { Helmet } from "react-helmet";
const DataHolder = ({
  dis,
  index,
  singleNewsdata,
  language,
  category,
  searchValue,
  activeNews,
  gettingId,
}) => {
  const url = window.location.href;
  return (
    <>
      <Helmet>
        <meta name="description" content={dis.description} />
        <meta property="og:title" content={dis.title} />
        <meta property="og:description" content={dis.description} />
        <meta property="og:image" content={dis.image} />
        <meta property="og:url" content={url} />
      </Helmet>
      <div
        className={`item item${index} p-3 rounded-t-md rounded-b-none shadow-md hover:bg-gradient-to-tr hover:from-red-50 hover:to-blue-50`}
      >
        {index === 0 || index % 8 === 0 ? (
          <Bigbox
            dis={dis}
            singleNewsdata={singleNewsdata}
            index={index}
            category={category}
            searchValue={searchValue}
            activeNews={activeNews}
          />
        ) : (
          <SmallBox
            dis={dis}
            singleNewsdata={singleNewsdata}
            index={index}
            category={category}
            searchValue={searchValue}
            activeNews={activeNews}
          />
        )}
      </div>
    </>
  );
};

export default DataHolder;
