import React, { useState } from "react";
import RightnavSingle from "./RightnavSingle";
import movies from "../../../movies.json";
const Rightnav = () => {
  return (
    <nav>
      <ul className="lg:flex justify-between align-middle h-full">
        <RightnavSingle name="Home" url={""} />
        <RightnavSingle name="News Bollywood" url={"news"} />
        <RightnavSingle name="Controversal Topic" url={"controversy"} />
        <RightnavSingle
          name="Movies"
          url={
            "actors/" + Math.floor(Math.random() * movies.length) + "/movies"
          }
        />
        <RightnavSingle name="Actors" url={"actors"} />

        <RightnavSingle name="Toggle" />
        <RightnavSingle name="SearchBar" />
      </ul>
    </nav>
  );
};

export default Rightnav;
