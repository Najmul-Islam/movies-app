import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

// url endpoint
const movies_url = process.env.REACT_APP_MOVIES_API;

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();
  const history = useHistory();

  const getParams = () => {
    fetch(`${movies_url}/${params._id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((movie) => {
        setSingleMovie(movie);
        const genres = movie.genres;
        setGenres(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, [params]);

  console.log(singleMovie);
  return (
    <>
      <button onClick={() => history.goBack()} className="btn btn-primary">
        Back
      </button>
      <div className="row">
        <div className="col-5 col-md-4">
          <img
            className="img-fluid"
            src={singleMovie.poster}
            alt={singleMovie.title}
          />
        </div>
        <div className="col-7 col-md-8">
          <h3>{singleMovie.title}</h3>
          <h5>Year: {singleMovie.year}</h5>

          <h5>
            Genre:{" "}
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
