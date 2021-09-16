import React, { useState, useEffect } from "react";
import { useTv } from "../../lib/TvContext";
import { Link } from "react-router-dom";

const TvSeries = () => {
  const { series, setSeries } = useTv();
  console.log(series);
  return (
    <div>
      <ul className="list-group">
        {series.map((singleSeries) => (
          <Link key={singleSeries.id} to={`tv-series/${singleSeries._id}`}>
            <li className="list-group-item">{singleSeries.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TvSeries;
