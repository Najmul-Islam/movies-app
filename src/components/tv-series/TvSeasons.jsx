import React, { useState, useEffect } from "react";
import { useTv } from "../../context/TvContext";
import { NavLink, useNavigate } from "react-router-dom";
import TvSeasonsPaginate from "../pagination/TvSeasonsPaginate";
import SingleSeason from "./SingleSeason";

import "./css/tv-seasons.css";
const TvSeasons = () => {
  const { currentSeries } = useTv();

  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-4 tv__item">
          {/* {currentMovies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })} */}

          {currentSeries.map((singleSeason) => (
            // <NavLink
            //   key={singleSeries.id}
            //   to={`/tv-series/${singleSeries._id}`}
            // >
            //   <li className="list-group-item">{singleSeries.title}</li>
            // </NavLink>
            <SingleSeason key={singleSeason._id} singleSeason={singleSeason} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="border__top border__bottom">
          <TvSeasonsPaginate itemsPerPage={2} />
        </div>
      </div>
    </>
  );
};

export default TvSeasons;
