import React, { useState, useEffect, useRef } from "react";
import SearchNav from "../newsNav/SearchNav";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import DataHolder from "./DataHolder";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet";
const Body = ({ onclick, lang, country, category, news, onSearch }) => {
  //to store the news from api
  const [collect, setCollect] = useState([]);
  //check wheather the user search the news or not
  const [searching, setSearching] = useState(false);
  //declare the navigation for the search values
  const navigate = useNavigate();
  // genws.io api key
  const [API_KEY, setAPI_KEY] = useState(
    // "3faef0d7c9b7745d2dae0fd5cc92df82"
    "86ea67eb2922d23c0059fdaa5cb47063"
  );
  // declare to store the search value after user type full name of news
  const [searchValue, setSearchValue] = useState();
  //declare to store the onchange the value of the search item in the search bar
  const [values, setValue] = useState("");
  // declare the value to get the query from the url
  const location = useLocation();
  // const [nextPage, setNextpage] = useState(null);
  const { id } = useParams();
  //api call function after rendering the screen
  const madeRequest = async () => {
    const request = await fetch(
      searchValue
        ? " https://gnews.io/api/v4/search?q=" +
            searchValue +
            "&lang=" +
            lang +
            "&apikey=" +
            API_KEY
        : " https://gnews.io/api/v4/search?q=" +
            category +
            "&lang=" +
            lang +
            "&apikey=" +
            API_KEY
    );

    const data = await request.json();
    setCollect([...data.articles]);
    const secRequest = await fetch(
      `  https://newsdata.io/api/1/news?apikey=pub_16347f6425c1b50d756deb251da386c1fbd9b&q=${searchValue}&language=${lang}`
    );
    const secData = await secRequest.json();
    secData.results.map((sec) => {
      setCollect((preValue) =>
        preValue.length < 20
          ? [
              ...preValue,
              {
                title: sec.title,
                image: sec.image_url,
                description: sec.description,
                content: sec.content,
              },
            ]
          : [...preValue]
      );
    });
  };

  //change the search value on change the caterogies from navbar
  useEffect(() => {
    setSearchValue("");
    setSearching(false);
    onclick(category);
  }, [category]);

  //change the name of title dynamically
  useEffect(() => {
    document.title = "News-Everywhere";
  }, []);
  //made request if the user search or change the language
  useEffect(() => {
    madeRequest();
    // searchValue && madeRequest();
    // searchValue && console.log(searching);
    // searchValue && setSearching(true);
    onclick(collect);
  }, [searchValue, lang, country]);

  //get the  query q from the present url to set the search value according to the url
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");
    setSearchValue(query || "");
  }, [location]);

  //this is the fuction which controls the searching data after user press enter
  const searchIt = () => {
    setSearchValue(values);
    setValue("");
  };

  const searchValues = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };
  const onEnterkey = (event) => {
    if (event.key === "Enter") {
      setSearchValue(values);
      setValue("");
      navigate(`/search?q=${values}`);
      onSearch(searchValue);
    }
  };

  return (
    <main className="w-full">
      {id > -1 && searchValue
        ? id <= collect.length
        : id < news.length && (
            <Helmet>
              <title>{searchValue ? collect[id].title : news[id].title}</title>
              <meta
                property="og:title"
                content={searchValue ? collect[id].title : news[id].title}
              />
              <meta
                property="og:image"
                content={searchValue ? collect[id].image : news[id].image}
              />
              <meta
                property="og:description"
                content={
                  searchValue ? collect[id].description : news[id].description
                }
              />
              <meta
                property="og:url"
                content={searchValue ? `/search?q=${searchValue}` : category}
              />
              <meta property="og:type" content="website" />
            </Helmet>
          )}
      <SearchNav
        searchValue={searchValues}
        value={values}
        onclick={searchIt}
        onenter={onEnterkey}
      />
      {/* <News /> */}
      {id > -1 && searchValue
        ? id <= collect.length
        : id < news.length && (
            <div className="xl:flex mb-2xl:px-20 lg:px-16 sm:px-10 p-5 xl:grid-cols-3 sm:grid-cols-1 lg:max-w-[90%] md:grid-cols-2 lg:grid-cols-3 m-auto bg-white">
              <div className="  lg:p-4 p-2 mb-4 shadow-mg lg:w-4/6 bg-white rounded-sm shadow-sm">
                <h1 className="text-center text-2xl text-blue-900 font-bold my-4 font-[poppins] ">
                  {!searchValue ? news[id].title : collect[id].title}
                </h1>
                <img
                  className=" max-h-[400px] w-[96%] object-cover rounded-t-md mb-4 mx-auto  "
                  src={!searchValue ? news[id].image : collect[id].image}
                  alt="news photo which is missing"
                />
                <h3 className="text-xl text-blue-900 my-6">
                  publish Date:
                  {!searchValue
                    ? news[id].publishedAt
                    : collect[id].publishedAt}
                </h3>
                <h3
                  style={{ lineHeight: "1.1" }}
                  className="text-lg text-sky-800 mb-5 font-bold text-justify font-[poppins]"
                >
                  {!searchValue
                    ? news[id].description
                    : collect[id].description}
                </h3>
                <p className="text-md text-sky-800 mb-5 font-semibold text-justify font-[poppins]">
                  {!searchValue ? news[id].content : collect[id].content}
                </p>
                <p>
                  for More :
                  <a
                    href={!searchValue ? news[id].url : collect[id].url}
                    target="_blank"
                  >
                    {!searchValue ? news[id].url : collect[id].url}
                  </a>
                </p>
              </div>
              <amp-ad
                width="100vw"
                height="320"
                type="adsense"
                data-ad-client="ca-pub-5060645674260174"
                data-ad-slot="8959064369"
                data-auto-format="rspv"
                data-full-width=""
              >
                <div overflow=""></div>
              </amp-ad>
            </div>
          )}
      <div className="mb-2 grid gap-4 xl:px-20 lg:px-16 sm:px-10 p-5 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[90%] m-auto bg-white">
        {
          /*searching &&*/
          collect.map(function (dis, key) {
            if (collect.length < 0) {
              return <LoadingPage />;
            }
            return (
              <DataHolder
                dis={dis}
                key={key}
                index={key}
                activeNews={searchValue ? collect : news}
                singleNewsdata={onclick}
              />
            );
          })
        }
      </div>

      <div className="mb-2 grid gap-4 xl:px-20 lg:px-16 sm:px-10 p-5 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[90%] m-auto bg-white">
        {!searching &&
          news.map(function (oneNews, key) {
            if (news.length === 0) return <LoadingPage />;
            return (
              <DataHolder
                dis={oneNews}
                key={key}
                index={key}
                singleNewsdata={onclick}
                language={lang}
                searchValue={searchValue}
                category={category}
                activeNews={searchValue ? collect : news}
              />
            );
          })}
      </div>
      {/* <button>More Articles</button> */}
    </main>
  );
};

export default Body;
