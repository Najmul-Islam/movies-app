import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { paginate } from "../utils/paginate";

// url endpoint
const movies_url = process.env.REACT_APP_MOVIES_API;
const genres_url = process.env.REACT_APP_GENRES_API;

const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [allDefaultMovies, setAllDefaultMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const [types, setTypes] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(movies_url);
      const movies = response.data;
      setAllMovies(movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenres = () => {
    fetch(genres_url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((genres) => {
        setGenres(genres);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovies();
    getGenres();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allDefaultMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setAllMovies(filtered);
    setCurrentPage(1);
    navigate("/");
    setSearchQuery("");
  };

  let movies = paginate(allMovies, currentPage, pageSize);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        allMovies,
        setAllMovies,
        isLoading,
        setIsLoading,
        pageSize,
        currentPage,
        setCurrentPage,
        types,
        setTypes,
        categories,
        setCategories,
        genres,
        selectedGenre,
        selectedCategorie,
        setSelectedCategorie,
        searchQuery,
        setSearchQuery,
        handlePageChange,
        handleSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoives = () => {
  return useContext(MoviesContext);
};

export { MoviesContext, MovieProvider };
