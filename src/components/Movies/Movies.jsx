import React from "react";
import { useMoives } from "../../context/MoviesContext";
import Movie from "./Movie";
import Sidebar from "../sidebar/Sidebar";
import Pagination from "../pagination/Pagination";
import Loading from "../common/Loading";
import "./style/movies.css";

const Movies = () => {
  const { movies, allMovies, isLoading } = useMoives();

  if (isLoading) {
    return <Loading />;
  }

  if (allMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <>
      <div className="col-12 col-xl-10 col-md-9 p-5 movies__item">
        {movies.map((movie) => {
          return <Movie key={movie._id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default Movies;
