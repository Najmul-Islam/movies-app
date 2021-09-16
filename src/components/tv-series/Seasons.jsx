import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
const tv_url = process.env.REACT_APP_TV_API;

const Seasons = () => {
  const [singleSeries, setSingleSeries] = useState({});
  const [seasons, setSeasons] = useState([]);

  const params = useParams();

  const getParams = () => {
    fetch(`${tv_url}/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((singleSeries) => {
        setSingleSeries(singleSeries);
        const seasons = singleSeries.seasons;
        setSeasons(seasons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, [params]);
  console.log(seasons);
  return (
    <>
      <h1>{singleSeries.title}</h1>
      {seasons.map((season) => (
        <ul key={season.id}>
          <Link to={`/tv-series/seasson/${season.id}`}>
            <li>{season.seasons}</li>
            <li>{console.log(season)}</li>
          </Link>
        </ul>
      ))}
    </>
  );
};

export default Seasons;
