import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

// url endpoint
const tv_genres_api = process.env.REACT_APP_TV_GENRES_API;

// context
const TvGenresContext = createContext();

export const TvGenresProvider = ({ children }) => {
  const [tvGenreSeasons, setTvGenreSeasons] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);
  const [tvGenreName, setTvGenreName] = useState("");

  // for react paginate
  const [currentTvGenreSeasons, setCurrentTvGenreSeasons] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const getGenres = async () => {
    try {
      const response = await axios.get(`${tv_genres_api}?_sort=genre`);
      const genres = await response.data;
      setTvGenres(genres);
      // console.log(genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleTvGenreSelect = (genre) => {
    console.log(genre);
    setItemOffset(0);
    setTvGenreSeasons(genre.tv_seasons);
    setTvGenreName(genre.genre);
    window.localStorage.setItem(
      "tvGenreSeasons",
      JSON.stringify(genre.tv_seasons)
    );
    window.localStorage.setItem("tvGenreName", JSON.stringify(genre.genre));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const tvGenreSeasons = window.localStorage.getItem("tvGenreSeasons");
    const tvGenreName = window.localStorage.getItem("tvGenreName");
    setTvGenreSeasons(JSON.parse(tvGenreSeasons));
    setTvGenreName(JSON.parse(tvGenreName));
  }, []);

  return (
    <TvGenresContext.Provider
      value={{
        tvGenres,
        setTvGenres,
        tvGenreSeasons,
        setTvGenreSeasons,
        handleTvGenreSelect,
        tvGenreName,
        currentTvGenreSeasons,
        setCurrentTvGenreSeasons,
        pageCount,
        setPageCount,
        itemOffset,
        setItemOffset,
      }}
    >
      {children}
    </TvGenresContext.Provider>
  );
};

export const useTvGenres = () => {
  return useContext(TvGenresContext);
};
