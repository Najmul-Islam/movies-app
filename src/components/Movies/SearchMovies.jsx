import React from "react";
import { useMovies } from "../../context/MoviesContext";
import Movie from "./Movie";
import Loading from "../common/Loading";
import "./style/movies.css";

const SearchMovies = () => {
  const { allDefaultMovies, isLoading, currentMovies } = useMovies();
  console.log(currentMovies);
  if (isLoading) {
    return <Loading />;
  }

  if (allDefaultMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <div className="row mt-2">
      <div className="col movies__item">
        {allDefaultMovies.map((movie) => {
          return <Movie key={movie._id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchMovies;
