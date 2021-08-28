import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Sidebar from "./Sidebar";
import Pagination from "./common/Pagination";

import { paginate } from "../utils/paginate";
import "./styles/movies.css";

// export const TypeContext = React.createContext();

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState([]);

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

  useEffect(() => {
    fetchMovies();
    getGenres();
    getCategories();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTypeSelect = (type) => {
    console.log(type);
  };

  const handleGenreSelect = (genre) => {
    setAllMovies(genre.movies);
    setCurrentPage(1);
  };

  const handleCategorieSelect = (category) => {
    setAllMovies(category.movies);
    setCurrentPage(1);
  };

  const movies = paginate(allMovies, currentPage, pageSize);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-5 movies__item">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="col-xl-2 col-md-3 d-none d-md-block">
          <Sidebar
            categories={categories}
            selectedCategorie={selectedCategorie}
            onCategorieSelect={handleCategorieSelect}
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreSelect={handleGenreSelect}
          />
        </div>

        <Pagination
          itemsCount={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Movies;
