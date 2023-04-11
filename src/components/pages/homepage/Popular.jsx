import React from "react";
import CategoriesTop from "./Categories";
import PopularSingle from "./PopularSingle";

const Popular = ({ data }) => {
  return (
    <div className="p-2">
      <CategoriesTop value={"popular Actors"} />
      <PopularSingle />
      <PopularSingle />
      <PopularSingle />
      <PopularSingle />
    </div>
  );
};

export default Popular;
