import { useState, useEffect } from "react";
import { Footer, Navbar } from "./components";
import movies from "../movies.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Homepage,
  NewsPage,
  PhotosPage,
  MoviesPage,
  Body,
} from "./components/pages";
function App() {
  return (
    <div className="bg-[#f3f8ff] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/actors" element={<Body details={movies} />} />
        <Route path="/actors/:id" element={<Body details={movies} />} />
        <Route path="/actors/:id/movies/:secId" element={<MoviesPage />} />
        <Route path="/actors/:id/movies" element={<MoviesPage />} />
        <Route path="/actors/:id/photos" element={<PhotosPage />} />
        <Route path="/actors/:id/photos/:secId" element={<PhotosPage />} />
        <Route path="/controversy" element={<NewsPage />} />
        <Route path="/controversy/:id" element={<NewsPage />} />
        <Route path="/news" element={""} />
        <Route path="/news/:id" element={""} />
        <Route
          path="*"
          element={
            <div>
              {" "}
              404 page not found you can back later may arrived here <b />{" "}
              <a href="/">Back </a>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
