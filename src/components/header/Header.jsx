import React from "react";
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Category from "../common/category";
import { useGenres } from "../../context/GenresContext";
import { useTvGenres } from "../../context/TvGenresContext";
import { useLocation } from "react-router-dom";
import "./style/header.css";
const Header = () => {
  const { genres, handleGenreSelect } = useGenres();
  const { tvGenres, handleTvGenreSelect } = useTvGenres();
  const { pathname } = useLocation();
  const category = pathname.split("/")[1];
  return (
    <Headroom className="bg__dark">
      <div className="">
        <Navbar />
      </div>
      <div className="d-md-none">
        <Category
          link={
            category === "movies"
              ? "/movies/genres"
              : category === "tv-series"
              ? "/tv-series/genres"
              : ""
          }
          genres={
            category === "movies"
              ? genres
              : category === "tv-series"
              ? tvGenres
              : []
          }
          handleGenreSelect={
            category === "movies"
              ? handleGenreSelect
              : category === "tv-series"
              ? handleTvGenreSelect
              : []
          }
        />
      </div>
    </Headroom>
  );
};

export default Header;
