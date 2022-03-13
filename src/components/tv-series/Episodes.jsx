import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
const tv_seasons_api = process.env.REACT_APP_TV_SEASONS_API;

const Episodes = () => {
  const [singleSeason, setSingleSeason] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getParams = async () => {
    try {
      const response = await axios.get(`${tv_seasons_api}/${params._id}`);
      const seasons = await response.data;

      setSingleSeason(seasons);
      const episodes = seasons.episodes;
      setEpisodes(episodes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParams();
  }, [params]);

  return (
    <div>
      <h1>Episodes</h1>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Back
      </button>
      {episodes.map((season) => (
        <ul>
          <Link to={`/tv-series/episode/${season._id}`}>
            <li>{season.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Episodes;
