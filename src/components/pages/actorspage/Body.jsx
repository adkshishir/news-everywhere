import React, { useEffect } from "react";
import Detail from "./Detail";
import { useParams } from "react-router";
import MovieTable from "./MovieTable";
import movies from "../../../../movies.json";
import RightnavSingle from "../../navBar/RightnavSingle";
import TextbelowImag from "../homepage/TextbelowImag";
import TextInsidePhoto from "../homepage/TextInsidePhoto";
const Body = ({ details }) => {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-7xl bg-[#ffffffc9]">
      {id && (
        <div>
          <div className="grid lg:grid-cols-2 mx-auto  p-4 ">
            <img
              className=" mx-auto  my-auto  object-cover align-middle  rounded-md shadow-md "
              src={details[id] && details[id].image}
              alt={`photo of ${details[id] && details[id].name}`}
            />
            <div className="m-3 text-justify  ">
              <h1 className=" font-bold"> {details[id] && details[id].name}</h1>
              <h3 className="font-semibold">
                DOB: {details[id] && details[id].DOB}
              </h3>
              <h3 className="font-semibold">
                {details[id] && details[id].DOBA}
              </h3>
              <ul className=" list-none w-fit bg-white p-2 rounded-lg shadow-md my-2">
                <RightnavSingle name={"movies"} url={`actors/${id}/movies`} />
                <hr className=" " height="3px" />
                <RightnavSingle name={"photos"} url={`actors/${id}/photos`} />
              </ul>
              <p className=" whitespace-pre-wrap">
                {" "}
                {details[id] && details[id].summary}
              </p>
            </div>
          </div>
          <h2 className="w-full text-center my-2">
            Other popular celebritites that you may interested.
          </h2>

          {/* <div>
            {movies[id].movies.map((movie) => (
              <MovieTable movie={movie} key={"Movies" + movie.index} />
            ))}
          </div> */}
        </div>
      )}
      <div className=" grid lg:grid-cols-3 gap-2 p-2 mx-auto lg:max-w-[80%]">
        {details.map((detail, key) => {
          return (
            <div>
              <TextInsidePhoto
                image={detail.image}
                heading={detail.name}
                className={"h-[200px]"}
                // date={detail.DOB}
                key={`detail ${key}`}
                index={key}
                url={`/actors/${key}`}
              />
              <ul className=" list-none flex justify-between bg-white p-2 rounded-lg shadow-md m-2">
                <RightnavSingle name={"movies"} url={`actors/${key}/movies`} />
                <RightnavSingle name={"photos"} url={`actors/${key}/photos`} />
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
