import { useGenres } from "../../context/GenresContext";
import GenresMoviesPaginate from "../pagination/GenresMoviesPaginate";
import Movie from "./Movie";
import "./style/genresMovies.css";

const GenresMovies = () => {
  const { genreName, currentGenreMovies } = useGenres();

  return (
    <>
      <div className="row">
        <h1 className="genre-heading">{genreName}</h1>
      </div>
      <div className="row">
        <div className="col movies__item">
          {currentGenreMovies.map((movie) => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
      </div>

      <div className="row">
        <div className="border__top border__bottom">
          <GenresMoviesPaginate itemsPerPage={50} />
        </div>
      </div>
    </>
  );
};

export default GenresMovies;
