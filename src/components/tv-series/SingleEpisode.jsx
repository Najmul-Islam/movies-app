import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const episodes_api = process.env.REACT_APP_EPISODES_API;

const SingleEpisode = () => {
  const [singleEpisode, setSingleEpisode] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getParams = () => {
    fetch(`${episodes_api}/${params._id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((episode) => {
        setSingleEpisode(episode);
        console.log(episode);
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
      <h1>single episodes</h1>
      <button onClick={() => navigate(-1)} className="btn btn-primary">
        Back
      </button>
      <h2>{singleEpisode.title}</h2>
      <p>{singleEpisode.desc}</p>
    </div>
  );
};

export default SingleEpisode;
