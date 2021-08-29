import React from "react";
import { useGlobalContext } from "../lib/MoviesContext";
import Movie from "./Movie";
import Sidebar from "./Sidebar";
import Pagination from "./common/Pagination";
import "./styles/movies.css";

const Movies = () => {
  const {
    movies,
    allMovies,
    isLoading,
    currentPage,
    pageSize,
    categories,
    selectedCategorie,
    genres,
    selectedGenre,
    handlePageChange,
    handleCategorieSelect,
    handleGenreSelect,
  } = useGlobalContext();

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
