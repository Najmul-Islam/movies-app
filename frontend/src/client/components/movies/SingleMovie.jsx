import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style/singleMovie.css";

// url endpoint
const movies_url = process.env.REACT_APP_MOVIES_API;
const media_url = process.env.REACT_APP_MEDIA_API;

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [mediaUrl, setMediaUrl] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getParams = async () => {
    try {
      const response = await axios.get(`${movies_url}/${params._id}`);
      const movie = await response.data;
      setSingleMovie(movie);
      const genres = await movie.genres;
      setGenres(genres);

      setMediaUrl(movie.poster.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParams();
  }, [params, navigate]);

  return (
    <div className="container min-vh-100 ">
      <div className="row border__left border__right py-2">
        <div className="col">
          <div className="d-flex justify-content-md-start justify-content-end">
            <button onClick={() => navigate(-1)} className="px-5 btn btn-dark">
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="row border__right border__top border__right border__left">
        <div className="col-3 border__right py-3">
          <img
            className="img-fluid"
            src={`${media_url}${mediaUrl}`}
            alt={singleMovie.title}
          />
        </div>
        <div className="col-9 py-2">
          <h3 className="sm-title">{singleMovie.title}</h3>
          <h5 className="sm-rating">Rating: {singleMovie.rating}</h5>
          <h5 className="sm-year">Year: {singleMovie.year}</h5>

          <h5 className="sm-genres">
            Genre:
            {genres.map((genre) => (
              <span className="sm-genre" key={genre._id}>
                {genre.genre}
              </span>
            ))}
          </h5>

          <a
            href={singleMovie.sublink}
            rel="noreferrer"
            target="_blank"
            className="btn btn-success"
          >
            Download Subtitle
          </a>
        </div>
      </div>

      <div className="row border__left border__bottom border__top border__right">
        <div className="col-md-12 py-3">
          <p>{singleMovie.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
