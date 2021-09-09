import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TvSeries = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = () => {
    fetch("http://localhost:1337/tv-series")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((series) => {
        setSeries(series);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);
  return (
    <div>
      <ul className="list-group">
        {series.map((seriesItem) => (
          <Link key={seriesItem.id} to={`tv-series/${seriesItem.id}`}>
            <li className="list-group-item">{seriesItem.title}</li>
            {/* {console.log(seriesItem)} */}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TvSeries;
