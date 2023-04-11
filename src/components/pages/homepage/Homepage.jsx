import React, { useEffect, useState } from "react";
import Detail from "../actorspage/Detail";
// import Button from "../Button";
import Actors from "./Actors";
import CategoriesTop from "./Categories";
import LeftGrid from "./LeftGrid";
import Popular from "./Popular";
import TextbelowImag from "./TextbelowImag";
import TodayTop from "./TodayTop";
import movies from "../../../../movies.json";

const Homepage = () => {
  const [movie, setMovies] = useState([]);
  const [controversy, setControversy] = useState([]);
  // const [actors, setActors] = useState([]);
  const [news, setNews] = useState([]);
  const makingArrayOf4 = (array) => {
    return array.filter((array4, index) => index < 4);
  };
  const movie4 = makingArrayOf4(movie);
  const controversy4 = makingArrayOf4(controversy);
  const news4 = makingArrayOf4(news);

  useEffect(() => {
    const fetchALLData = async () => {
      try {
        setMovies(movies);
        setControversy(data3);
        setNews(data1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchALLData();
  }, []);
  return (
    <div>
      {/* <div className=" text-center font-bold h-[100px] shadow-red-100 shadow-md my-2 border-2 align-middle max-w-6xl m-auto rounded-md">
        ADs
      </div> */}
      <div className="grid lg:grid-cols-3   gap-2 2xl:max-w-[80%] p-2 mx-auto ">
        {/* todays news goes here */}
        <div className="lg:col-span-2 m-2 rounded-md  grid lg:grid-cols-3 mx-auto">
          {/* from all movies 4 movies are filter to show the samples in the homepage */}
          {movie4.map((data, index) => (
            <LeftGrid
              heading={data.name}
              image={data.image}
              date={data.DOB}
              key={index}
              index={index}
              url={`/news/${index}`}
            />
          ))}
        </div>
        <div className="  p-2 pt-4 border-[1px] border-red-500  bg-white shadow-md shadow-[#a4a4ff]  m-2 rounded-md">
          <CategoriesTop value={`Today's Top`} />
          {/* most hyped news of the todays goes in this field  */}
          {movie4.map((data, index) => (
            <TodayTop
              heading={data.name}
              image={data.image}
              date={data.DOB}
              key={index}
              index={index}
              url={`/top/${index}`}
            />
          ))}
        </div>
      </div>
      <div className=" mx-auto mt-5 pb-5 bg-[#ffffc046] grid gap-2 lg:grid-cols-4">
        <div className="flex lg:col-span-4  p-2">
          <CategoriesTop
            value={"Controversal"}
            name={"Read now"}
            url={"/controversy"}
          />
          {/* <Button value={"Read Now"} /> */}
        </div>
        {/* 4 controvrsal news goes here */}
        {controversy4.map((contro, index) => (
          <TextbelowImag
            image={contro.image}
            heading={contro.name}
            date={contro.DOB}
            url={`/controversy/${index}`}
            key={index}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-3  gap-2 max-w-[80%] mx-auto">
        <div className=" lg:col-span-3 m-2 p-3">
          <CategoriesTop value={"Actors"} name={"see now"} url={`/actors`} />
        </div>
        <div className=" col-span-2 grid lg:grid-cols-3">
          {movie4.map((data, index) => (
            <LeftGrid
              heading={data.name}
              image={data.image}
              date={data.DOB}
              key={index}
              index={index}
              url={`/actors/${index}`}
            />
          ))}
        </div>
        <Popular />
        <div className=" col-span-2">
          <CategoriesTop value={"movies or other content"} />
          {movie4.map((data, index) => (
            <Actors
              heading={data.name}
              image={data.image}
              date={data.DOB}
              key={index}
              index={index}
              url={`/actors/${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
