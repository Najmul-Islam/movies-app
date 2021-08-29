import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styles/movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`movie/${movie.id}`}>
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
      </Link>
    </div>
  );
};

export default Movie;
