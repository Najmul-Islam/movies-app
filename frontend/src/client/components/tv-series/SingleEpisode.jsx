import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const episodes_api = process.env.REACT_APP_EPISODES_API;

const SingleEpisode = () => {
  const [singleEpisode, setSingleEpisode] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getParams = async () => {
    try {
      const response = await axios.get(`${episodes_api}/${params._id}`);
      const episode = await response.data;
      setSingleEpisode(episode);
    } catch (error) {
      console.log(error);
    }
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
