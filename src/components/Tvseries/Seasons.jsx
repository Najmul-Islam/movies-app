import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const Seasons = () => {
  const [singleSeries, setSingleSeries] = useState({});
  const [seassons, setSeasssons] = useState([]);

  const params = useParams();

  const getParams = () => {
    fetch(`http://localhost:1337/tv-series/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((singleSeries) => {
        setSingleSeries(singleSeries);
        const seassons = singleSeries.seasons;
        setSeasssons(seassons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, [params]);

  console.log(seassons);

  return (
    <>
      <h1>{singleSeries.title}</h1>
      {seassons.map((seasson) => (
        <ul>
          <Link key={seasson.id}>
            <li>{seasson.season_number}</li>
          </Link>
        </ul>
      ))}
    </>
  );
};

export default Seasons;
