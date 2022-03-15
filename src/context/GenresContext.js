import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

// url endpoint
const genres_api = process.env.REACT_APP_GENRES_API;

// context
const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [genres, setGenres] = useState([]);

  // for react paginate
  const [currentGenreMovies, setCurrentGenreMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const getGenres = async () => {
    try {
      const response = await axios.get(genres_api);
      const genres = await response.data;
      setGenres(genres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleGenreSelect = (genre) => {
    setItemOffset(0);
    setGenreMovies(genre.movies);
    setGenreName(genre.genre);
    window.localStorage.setItem("genreMovies", JSON.stringify(genre.movies));
    window.localStorage.setItem("genreName", JSON.stringify(genre.genre));
  };

  useEffect(() => {
    const genreMovies = window.localStorage.getItem("genreMovies");
    const genreName = window.localStorage.getItem("genreName");
    setGenreMovies(JSON.parse(genreMovies));
    setGenreName(JSON.parse(genreName));
  }, []);
  return (
    <GenresContext.Provider
      value={{
        genres,
        setGenres,
        genreMovies,
        setGenreMovies,
        handleGenreSelect,
        genreName,
        currentGenreMovies,
        setCurrentGenreMovies,
        pageCount,
        setPageCount,
        itemOffset,
        setItemOffset,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = () => {
  return useContext(GenresContext);
};
