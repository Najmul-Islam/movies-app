import React, { useState, useEffect } from "react";
import { useTv } from "../../context/TvContext";
import { Link, useNavigate } from "react-router-dom";

const TvSeasons = () => {
  const { series, setSeries } = useTv();
  const navigate = useNavigate();
  console.log(series);

  return (
    <div>
      <h1>Tv Seasons</h1>

      <ul className="list-group">
        {series.map((singleSeries) => (
          <Link key={singleSeries.id} to={`/tv-series/${singleSeries._id}`}>
            <li className="list-group-item">{singleSeries.title}</li>
            <li>hello world</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TvSeasons;
