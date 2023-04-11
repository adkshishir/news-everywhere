import React from "react";
import TextInsidePhoto from "./TextInsidePhoto";
import TextbelowImag from "./TextbelowImag";
const LeftGrid = ({ heading, image, index, date, url }) => {
  return (
    <div
      className={`${index === 0 || index % 8 === 0 ? "lg:col-span-3" : ""} `}
    >
      {index === 0 || index % 8 === 0 ? (
        <TextInsidePhoto
          heading={heading}
          image={image}
          date={date}
          className={"h-[300px]"}
          url={url}
        />
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

export default LeftGrid;
