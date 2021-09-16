import React, { useState, useEffect } from "react";
import { useTv } from "../../lib/TvContext";
import { Link } from "react-router-dom";

const TvSeasons = () => {
  const { series, setSeries } = useTv();
  console.log(series);

  return (
    <div>
      <ul className="list-group">
        {series.map((singleSeries) => (
          <Link key={singleSeries.id} to={`tv-series/${singleSeries._id}`}>
            <li className="list-group-item">{singleSeries.title}</li>
            <li>hello world</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TvSeasons;
