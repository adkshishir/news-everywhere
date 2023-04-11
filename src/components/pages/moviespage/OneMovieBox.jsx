import React from "react";
import Image from "../homepage/Image";
const OneMovieBox = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <h4>Release on {movie.year}</h4>
      <Image image={movie.posture && movie.posture} />

      <div className="grid grid-cols-2">
        <h3>Director</h3>
        <h4>{movie.director}</h4>
        <h3></h3>
        <h4>{movie.director}</h4> <h3>Director</h3>
        <h4>{movie.director}</h4>
      </div>
    </div>
  );
};

export default OneMovieBox;
