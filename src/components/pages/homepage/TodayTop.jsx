import React from "react";
import CategoriesTop from "./Categories";
import TextbelowImag from "./TextbelowImag";
import TextInsidePhoto from "./TextInsidePhoto";

const TodayTop = ({ heading, image, date, index, url }) => {
  return index === 0 ? (
    <TextInsidePhoto
      heading={heading}
      image={image}
      date={date}
      index={index}
      className="h-[250px]"
      url={url}
    />
  ) : (
    <TextbelowImag
      heading={heading}
      // image={image}
      date={date}
      index={index}
      url={url}
    />
  );
};

export default TodayTop;
