import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  bussiness,
  entertainment,
  general,
  health,
  nation,
  sports,
  science,
  top,
  world,
} from "./newsIsHere";
import { ContactUS, Terms, Privacy, About } from "./footer/pages";
import NavBar from "./newsNav/NavBar";
import Active from "./newsBody/ActivePage";
import Body from "./newsBody/Body";
import Footer from "./footer/Footer";
import NonePage from "./newsBody/NonePage";
function App() {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("top");
  const [searchValue, setSearchValue] = useState("");
  const readDetail = (Data) => {
    localStorage.setItem("selectedObject", JSON.stringify(Data));
    setData(Data);
  };
  const setLanguage = (value) => {
    setLang(value);
  };
  const countryName = (value) => {
    setCountry(value);
  };
  function setCate(value) {
    setCategory(value);
  }
  const searchName = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="from-red-50 bg-gradient-to-tr to-blue-50 w-full">
      <NavBar
        lang={setLanguage}
        countryName={countryName}
        categorys={setCate}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"general"}
              news={general}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/top/:id"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"general"}
              news={general}
              onSearch={searchName}
            />
          }
        />

        <Route
          path={`/search`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={category}
              news={top}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/reading"
          element={
            <Active
              data={data}
              onclick={readDetail}
              category={"top"}
              news={top}
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"entertainment"}
              news={entertainment}
              onSearch={searchName}
            />
          }
        />
        <Route
          path={`/search`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"general"}
              news={general}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/general"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"general"}
              news={general}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/world"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"world"}
              news={world}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/business"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"business"}
              news={bussiness}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/nation"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"nation"}
              news={nation}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={"us"}
              category={"sports"}
              news={sports}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/science"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"science"}
              news={science}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/health"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"health"}
              news={health}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/entertainment/:id"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"entertainment"}
              news={entertainment}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/sports/:id"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={"us"}
              category={"sports"}
              news={sports}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/science/:id"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"science"}
              news={science}
              onSearch={searchName}
            />
          }
        />
        <Route
          path={`/nation/:id`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={category}
              news={nation}
              onSearch={searchName}
            />
          }
        />
        <Route
          path={`/general/:id`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={category}
              news={general}
              onSearch={searchName}
            />
          }
        />
        <Route
          path={`/business/:id`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={category}
              news={bussiness}
              onSearch={searchName}
            />
          }
        />
        <Route
          path={`/health/:id`}
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={category}
              news={health}
              onSearch={searchName}
            />
          }
        />
        <Route
          path="/world/:id"
          element={
            <Body
              onclick={readDetail}
              lang={lang}
              country={country}
              category={"world"}
              news={world}
              onSearch={searchName}
            />
          }
        />
        <Route path="*" element={<NonePage />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
