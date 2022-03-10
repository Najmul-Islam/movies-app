import React from "react";
import { NavLink } from "react-router-dom";
// import SingleLoading from "./SingleLoading.js";
import { FaStar } from "react-icons/fa";
import "./style/movie.css";

const media_url = process.env.REACT_APP_MEDIA_API;

const Movie = ({ movie }) => {
  console.log(movie.poster.formats);
  return (
    <div className="movie">
      <NavLink to={`/movies/${movie._id}`} style={{ textDecoration: "none" }}>
        <div className="img__container">
          <img
            className="movie__img img-fluid"
            src={`${media_url}${movie.poster.formats.small.url}`}
            alt={movie.title}
          />
          <div className="img__overley">
            <img src="images/play.svg" alt="" />
          </div>
          <span className="movie__rate">
            <FaStar /> {movie.rating}
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
