import React, { useEffect } from "react";
import movies from "../../../../movies.json";
import { useParams } from "react-router";
const PhotosPage = () => {
  const { id, secId } = useParams();
  const photos = movies[id].photos;
  useEffect(() => {
    console.log(movies[1]);
  }, []);
  return <div>PhotosPage</div>;
};

export default PhotosPage;
