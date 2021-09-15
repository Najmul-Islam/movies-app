import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const seasons_url = process.env.REACT_APP_SEASONS_API;

const Episodes = () => {
  const [singleSeason, setSingleSeason] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const params = useParams();

  const getParams = () => {
    fetch(`${seasons_url}/${params._id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((seasons) => {
        setSingleSeason(seasons);
        console.log(seasons.tvs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, [params]);

  return (
    <div>
      <h1>Single season</h1>
    </div>
  );
};

export default Episodes;
