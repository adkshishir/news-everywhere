import React from "react";
import LeftGrid from "../homepage/LeftGrid";
import TextbelowImag from "../homepage/TextbelowImag";
import TextInsidePhoto from "../homepage/TextInsidePhoto";
import MovieTable from "./MovieTable";
import { useParams } from "react-router";
const Detail = ({ heading, image, date, index, url }) => {
  const { id } = useParams();
  return (
    <div className={`${index === 0 || index % 8 === 0 ? "col-span-2" : ""}`}>
      {index === 0 || index % 8 === 0 ? (
        <div className=" col-span-2">
          <TextInsidePhoto
            heading={heading}
            image={image}
            date={date}
            className={"h-[300px]"}
            url={url}
          />
        </div>
      ) : (
        <TextbelowImag
          heading={heading}
          image={image}
          date={date}
          className={"h-[100px]"}
          url={url}
        />
      )}
    </div>
  );
};

export default Detail;
