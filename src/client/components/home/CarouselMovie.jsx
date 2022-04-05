import React from "react";
import { NavLink } from "react-router-dom";
// import SingleLoading from "./SingleLoading.js";
import { FaStar } from "react-icons/fa";
import "./css/carouselMovie.css";

const media_url = process.env.REACT_APP_MEDIA_API;

const CarouselMovie = ({ movie }) => {
  return (
    <div className="cmovie">
      <NavLink to={`/movies/${movie._id}`} style={{ textDecoration: "none" }}>
        <div className="cimg__container">
          <img
            className="cmovie__img img-fluid"
            src={`${media_url}${movie.poster.formats.small.url}`}
            alt={movie.title}
          />
          <div className="cimg__overley">
            <img src="images/play.svg" alt="" />
          </div>
          <span className="cmovie__rate">
            <FaStar /> {movie.rating}
          </span>
        </div>
        <div className="cmovie__info" title={movie.title}>
          <h3 className="cmovie__title">{movie.title}</h3>
          <p className="cmovie__year">{movie.year}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default CarouselMovie;
