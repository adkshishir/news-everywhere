import React, { useState, useEffect } from "react";
import axios from "axios";
import DataHolder from "./DataHolder";
const API_URL =
  " https://gnews.io/api/v4/search?q=top&lang=en&apikey=86ea67eb2922d23c0059fdaa5cb47063";

function News({ onclick }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  useEffect(() => {
    // Dynamically set the title and description meta tags based on the current news article
    if (news.length > 0) {
      const currentArticle = news[0];
      document.title = currentArticle.title;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", currentArticle.description);
    }
  }, [news]);

  return (
    <div>
      {news.map((article, index) => (
        <DataHolder
          dis={article}
          key={index}
          index={index}
          singleNewsdata={onclick}
        />
      ))}
    </div>
  );
}

export default News;
