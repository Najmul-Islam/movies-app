import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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
  }, [params.id]);

  return (
    <div className="container py-5">
      <button onClick={() => history.goBack()} className="btn btn-primary">
        Back
      </button>
      <h1>{singleMovie.title}</h1>
    </div>
  );
};

export default SingleMovie;
