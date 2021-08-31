import React from "react";
import { NavLink } from "react-router-dom";
// import SingleLoading from "./SingleLoading.js";
import { useGlobalContext } from "../lib/MoviesContext";
import { FaStar } from "react-icons/fa";
import "./styles/movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <NavLink to={`movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <div className="img__container">
          <img
            className="movie__img img-fluid"
            src={movie.image}
            alt={movie.title}
          />
          <div className="img__overley">
            <img src="images/play.svg" alt="" />
          </div>
          <span className="movie__rate">
            <FaStar /> 7.3
          </span>
        </div>
        <div className="movie__info" title={movie.title}>
          <h3 className="movie__title">{movie.title}</h3>
          <p className="movie__year">{movie.year}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Movie;
