import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
    <>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Back
      </button>
      <div className="row">
        <div className="col-5 col-md-4">
          <img
            className="img-fluid"
            src={`${media_url}${mediaUrl}`}
            alt={singleMovie.title}
          />
        </div>
        <div className="col-7 col-md-8">
          <h3>{singleMovie.title}</h3>
          <h5>Year: {singleMovie.year}</h5>

          <h5>
            Genre:
            {genres.map((genre) => (
              <span key={genre._id}>{genre.genre}</span>
            ))}
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 py-5">
          <p>{singleMovie.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
