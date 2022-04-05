import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
// url endpoint
const tv_seasons_api = process.env.REACT_APP_TV_SEASONS_API;
const tv_episode_api = process.env.REACT_APP_EPISODES_API;

// context
const TvContext = createContext();

export const TvProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [allEpisode, setAllEpisode] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // for react paginate
  const [currentSeries, setCurrentSeries] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState([]);

  const fetchSeries = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${tv_seasons_api}?_sort=createdAt:DESC`
      );
      const series = await response.data;
      setSeries(series);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchEpisode = async () => {
    try {
      const response = await axios.get(tv_episode_api);
      const episode = await response.data;
      setAllEpisode(episode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeries();
    fetchEpisode();
  }, []);

  return (
    <TvContext.Provider
      value={{
        series,
        setSeries,
        currentSeries,
        setCurrentSeries,
        allEpisode,
        setAllEpisode,
        currentEpisode,
        setCurrentEpisode,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </TvContext.Provider>
  );
};

export const useTv = () => {
  return useContext(TvContext);
};
