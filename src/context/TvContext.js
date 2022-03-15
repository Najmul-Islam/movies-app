import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
// url endpoint
const tv_seasons_api = process.env.REACT_APP_TV_SEASONS_API;

// context
const TvContext = createContext();

export const TvProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  // for react paginate
  const [currentSeries, setCurrentSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      const response = await axios.get(tv_seasons_api);
      const series = await response.data;
      setSeries(series);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <TvContext.Provider
      value={{ series, setSeries, currentSeries, setCurrentSeries }}
    >
      {children}
    </TvContext.Provider>
  );
};

export const useTv = () => {
  return useContext(TvContext);
};
