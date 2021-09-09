import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const params = useParams();
  const history = useHistory();

  const getParams = () => {
    fetch(`http://localhost:1337/movies/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((singleMovie) => {
        setSingleMovie(singleMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParams();
  }, []);

  // <button onClick={() => history.goBack()} className="btn btn-primary"></button>

  console.log(singleMovie);
  return (
    <>
      <div className="row">
        <div className="col-5 col-md-4">
          <img
            className="img-fluid"
            src={singleMovie.image}
            alt={singleMovie.title}
          />
        </div>
        <div className="col-7 col-md-8">
          <h3>{singleMovie.title}</h3>
          <h5>
            Year: <Link>{singleMovie.year}</Link>
          </h5>
          <h6>
            Translators:
            <Link>
              {singleMovie.translators.map((translator) => (
                <span>{translator.name}</span>
              ))}
            </Link>
          </h6>
          <h6>
            Genres:
            <Link>
              {singleMovie.genres.map((genre) => (
                <span>{genre.genre}</span>
              ))}
            </Link>
          </h6>

          <h6>
            Language:
            <Link>
              {singleMovie.languages.map((language) => (
                <span>{language.language}</span>
              ))}
            </Link>
          </h6>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 py-5">
          <p>{singleMovie.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
