import React, { useEffect, useState } from "react";
import movies from "../../../../movies.json";
import { useParams } from "react-router";
import Image from "../homepage/Image";
import TextbelowImag from "../homepage/TextbelowImag";
import RightnavSingle from "../../navBar/RightnavSingle";
import H3h4 from "./H3h4";
const MoviesPage = () => {
  const { id, secId } = useParams();
  const [collectMovie, setCollectMovie] = useState(movies[id].movies);
  return (
    <div className=" overflow-x-scroll">
      You may intereseted to
      <ul className=" list-none flex justify-between">
        {movies.map((movie, index) => (
          <RightnavSingle
            key={`url${index}`}
            name={movie.name}
            url={`actors/${index}`}
            className={"bg-white "}
          />
        ))}
      </ul>
      {secId && (
        <div>
          <h1>{collectMovie[secId].title}</h1>
          <Image image={collectMovie[secId].image} />
          <div>
            <H3h4 h2={"Director"} h3={collectMovie[secId.director]} />
            <H3h4
              h2={"Cast by:"}
              h3={collectMovie[secId].cast.map((cast, key) => (
                <span key={`${key} cast`}>{cast} , </span>
              ))}
            />
            <H3h4
              h2={"Genre:"}
              h3={collectMovie[secId].genre.map((cast, key) => (
                <span key={`${key} cast`}>{cast} , </span>
              ))}
            />
            <H3h4 h2={"Rating:"} h3={collectMovie[secId].imdb_rating} />
            <H3h4 h2={"plot"} h3={collectMovie[secId].plot} />
            <H3h4 h2={"Description"} h3={collectMovie[secId].description} />
            <H3h4
              h2={"Issue faced by movie"}
              h3={collectMovie[secId].controversy}
            />
            <H3h4 h2={"Awards"} h3={collectMovie[secId].awards} />
            <H3h4 h2={"Budget"} h3={collectMovie[secId].earnings.budget} />
            <H3h4
              h2={"Earnings"}
              h3={collectMovie[secId].earnings.box_office}
            />
          </div>
        </div>
      )}
      <h1>movies of {movies[id].name}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-[80%] mx-auto">
        {collectMovie &&
          collectMovie.map((oneMovie, index) => (
            <TextbelowImag
              heading={oneMovie.title}
              date={oneMovie.year}
              key={index}
              image={""}
              url={`/actors/${id}/movies/${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default MoviesPage;
