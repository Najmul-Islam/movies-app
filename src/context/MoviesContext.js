import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// url endpoint
const movies_url = process.env.REACT_APP_MOVIES_API;

const MoviesContext = createContext();

const MovieProvider = ({ children }) => {
  // movies
  const [allMovies, setAllMovies] = useState([]);
  const [allDefaultMovies, setAllDefaultMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // for react paginate
  const [currentMovies, setCurrentMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // search
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${movies_url}`);
      const movies = response.data;
      setAllMovies(movies);
      setAllDefaultMovies(movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log(filtered);
    setAllDefaultMovies(filtered);
    navigate("movies/search");
    setSearchQuery("");
  };

  return (
    <MoviesContext.Provider
      value={{
        allMovies,
        setAllMovies,
        allDefaultMovies,
        setAllDefaultMovies,
        currentMovies,
        setCurrentMovies,
        isLoading,
        setIsLoading,
        searchQuery,
        setSearchQuery,
        handleSearch,
        pageCount,
        setPageCount,
        itemOffset,
        setItemOffset,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesContext, MovieProvider };
