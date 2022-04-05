import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./css/single-season.css";
import play from "./css/play.svg";
const media_url = process.env.REACT_APP_MEDIA_API;

const SingleSeason = ({ singleSeason }) => {
  console.log(singleSeason);
  return (
    <div className="tv">
      <NavLink
        to={`/tv-series/${singleSeason._id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="tv-img__container">
          <img
            className="tv__img img-fluid"
            src={`${media_url}${singleSeason.poster.formats.small.url}`}
            alt={singleSeason.title}
          />
          <div className="tv-img__overley">
            <img src={play} alt="" />
          </div>
          <span className="tv__rate">
            <FaStar /> {singleSeason.rating}
          </span>
          <span className="tv__season-no">{singleSeason.seasonNo}</span>
        </div>
        <div className="tv__info" title={singleSeason.title}>
          <h3 className="tv__title">{singleSeason.title}</h3>
          <p className="tv__year">{singleSeason.year}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleSeason;
