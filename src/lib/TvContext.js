import React, { useState, useEffect, createContext, useContext } from "react";

// url endpoint
const tv_seasons_api = process.env.REACT_APP_TV_SEASONS_API;

// context
const TvContext = createContext();

export const TvProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  const fetchSeries = () => {
    fetch(tv_seasons_api)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((series) => {
        setSeries(series);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <TvContext.Provider value={{ series, setSeries }}>
      {children}
    </TvContext.Provider>
  );
};

export const useTv = () => {
  return useContext(TvContext);
};
