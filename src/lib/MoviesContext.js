import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { paginate } from "../utils/paginate";
import _ from "lodash";

const TypeContext = React.createContext();

const AppProvider = ({ children }) => {
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

  const history = useHistory();

  const fetchMovies = () => {
    setIsLoading(true);
    fetch("http://localhost:1337/movies?_sort=id:DESC")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((movies) => {
        setAllMovies(movies);
        setAllDefaultMovies(movies);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTypes = () => {
    fetch("http://localhost:1337/types")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((types) => {
        setTypes(types);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCategories = () => {
    fetch("http://localhost:1337/categories")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGenres = () => {
    fetch("http://localhost:1337/genres?_sort=genre:ASC")
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
    getTypes();
    getCategories();
    getGenres();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTypeSelect = (type) => {
    setAllMovies(type.movies);
    setCurrentPage(1);
  };

  const handleCategorieSelect = (category) => {
    setAllMovies(category.movies);
    setCurrentPage(1);
  };

  const handleGenreSelect = (genre) => {
    setAllMovies(genre.movies);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allDefaultMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setAllMovies(filtered);
    setCurrentPage(1);
    history.push("/");
    setSearchQuery("");
  };

  let movies = paginate(allMovies, currentPage, pageSize);

  return (
    <TypeContext.Provider
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
        handleCategorieSelect,
        handleTypeSelect,
        handleGenreSelect,
        handleSearch,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TypeContext);
};

export { TypeContext, AppProvider };
