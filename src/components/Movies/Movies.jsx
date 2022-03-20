import React from "react";
import { useMovies } from "../../context/MoviesContext";
import MoviesPaginate from "../pagination/MoviesPaginate";
import Movie from "./Movie";
import Loading from "../common/Loading";
import "./style/movies.css";

const Movies = () => {
  const { allMovies, isLoading, currentMovies } = useMovies();
  if (isLoading) {
    return <Loading />;
  }

  if (allMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <>
      <div className="row mt-2">
        <div className="col movies__item">
          {currentMovies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })}
        </div>
      </div>
      <div className="row border__top border__bottom">
        <div className="">
          <MoviesPaginate itemsPerPage={50} />
        </div>
      </div>
    </>
  );
};

export default Movies;
