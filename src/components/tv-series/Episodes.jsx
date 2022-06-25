import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "./css/episodes.css";
const tv_seasons_api = process.env.REACT_APP_TV_SEASONS_API;
const media_url = process.env.REACT_APP_MEDIA_API;

const Episodes = () => {
  const [singleSeason, setSingleSeason] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [seasonPoster, setSeasonPoster] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getParams = async () => {
    try {
      const response = await axios.get(`${tv_seasons_api}/${params._id}`);
      const seasons = await response.data;
      const episodes = seasons.episodes;
      setSingleSeason(seasons);
      setEpisodes(episodes);
      setSeasonPoster(seasons.poster.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParams();
  }, [params]);

  return (
    <div className="container border__bottom">
      <div className="row py-2 border__bottom border__left border__right">
        <div className="col">
          <button onClick={() => navigate(-1)} className="btn btn-dark px-5">
            Back
          </button>
        </div>
      </div>
      <div className="row border__bottom border__right">
        <div className="col-4 col-xl-2 col-md-3 py-3 border__right border__left">
          <img
            className="img-fluid"
            src={`${media_url}${seasonPoster}`}
            alt={singleSeason.title}
          />
        </div>
        <div className="col-8 col-xl-10 col-md-9 py-3">
          <h5 className="season__title">{singleSeason.title}</h5>
          <p className="season__year">
            Year: <span>{singleSeason.year}</span>
          </p>

          <p className="season__rating">
            Rating: <span>{singleSeason.rating}</span>
          </p>
        </div>
      </div>
      <div className="row py-3 border__left border__right">
        {episodes.map((episode) => (
          <Link key={episode.id} to={`/tv-series/episode/${episode._id}`}>
            <h6 className="mb-3 episode__title">{episode.title}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
