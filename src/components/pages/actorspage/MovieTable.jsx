import React, { useEffect, useState } from "react";
import OneData from "./OneData";
const MovieTable = ({ movie }) => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    movie.verdict === "Hit" && setBg("bg-[#ffa500]");
    movie.verdict === "Flop" && setBg("bg-[#ffb6c1]");
    movie.verdict === "Disaster" && setBg("bg-[#ff0000]");
    movie.verdict === "Blockbuster" && setBg("bg-[#00ff7f]");
    movie.verdict === "Super Hit" && setBg("bg-[#ffd700]");
    movie.verdict === "All-Time Blockbuster" && setBg("bg-[#00ff00]");
    movie.verdict === "Average" && setBg("bg-[#808080]");
    movie.verdict === "Below Average" && setBg("bg-[#707070]");
    movie.verdict === "Semi-Hit" && setBg("bg-[ffff00]");
    console.log(movie);
  }, [movie.verdict]);
  return (
    <div className="grid grid-cols-4  max-w-4xl m-auto">
      <OneData value={movie.title} />
      <OneData value={movie.year} />
      <OneData value={movie.earnings.box_office} />
      <OneData value={movie.imdb_rating} bg={bg} />
    </div>
  );
};

export default MovieTable;
