import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const params = useParams();

  console.log(params);

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

  return (
    <div>
      <h1>{singleMovie.title}</h1>
    </div>
  );
};

export default SingleMovie;
