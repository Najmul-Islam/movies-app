import React from "react";
import { useMovies } from "../../context/MoviesContext";
import MoviesPaginate from "../pagination/MoivesPaginate";
import Movie from "./Movie";
import Loading from "../common/Loading";
import "./style/movies.css";

const Movies = () => {
  const { allMovies, isLoading, currentMovies } = useMovies();
  console.log(currentMovies);
  if (isLoading) {
    return <Loading />;
  }

  if (allMovies.length === 0) {
    return <h1>There no movie</h1>;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-4 movies__item">
          {currentMovies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })}
        </div>
      </div>
      <div className="row">
        <div className="border__top border__bottom">
          <MoviesPaginate itemsPerPage={1} />
        </div>
      </div>
    </>
  );
};

export default Movies;
