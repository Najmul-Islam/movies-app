import React from "react";
import { FaStar } from "react-icons/fa";
import "./styles/movie.css";

const Movie = ({ movie }) => {
  return (
    // col-4 col-sm-3 col-xl-1 col-md-3 p-1
    <div className="movie">
      <div className="img__container">
        <div className="img__overley"></div>
        <img
          className="movie__img img-fluid"
          src={movie.image}
          alt={movie.title}
        />
        <span className="movie__rate">
          <FaStar /> 7.3
        </span>
      </div>
      <div className="movie__info">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__year">{movie.year}</p>
      </div>
    </div>
  );
};

export default Movie;
