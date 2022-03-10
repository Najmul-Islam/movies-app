import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
// url endpoint
const genres_api = process.env.REACT_APP_GENRES_API;

// context
const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchSeries = async () => {
    try {
      const response = await axios.get(genres_api);
      const genres = await response.data;
      setGenres(genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleGenreSelect = (genre) => {
    setGenreMovies(genre.movies);
    console.log(genreMovies);
    // console.log(genre);
    // setCurrentPage(1);
    // navigate(`/movies/genres/${genre.genre.toLowerCase()}`);
  };

  return (
    <GenresContext.Provider
      value={{
        genres,
        setGenres,
        handleGenreSelect,
        genreMovies,
        setGenreMovies,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = () => {
  return useContext(GenresContext);
};
