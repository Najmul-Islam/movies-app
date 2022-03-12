import React from "react";
import { useGenres } from "../../context/GenresContext";
import Movie from "./Movie";
const GenresMovies = () => {
  const { genreMovies } = useGenres();
  return (
    <>
      <div className="col-12 col-xl-10 col-md-9 p-5 movies__item">
        {genreMovies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default GenresMovies;
