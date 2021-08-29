import React, { useState, useEffect, useContext } from "react";

const TypeContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [types, setTypes] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = () => {
    setIsLoading(true);
    fetch("http://localhost:1337/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((movies) => {
        setAllMovies(movies);
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
    fetch("http://localhost:1337/genres")
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSelectedGenre(null);
    if (searchQuery) {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      console.log(filtered);
      setAllMovies(filtered);
    }
  };

  return (
    <TypeContext.Provider
      value={{
        allMovies,
        setAllMovies,
        isLoading,
        setIsLoading,
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
