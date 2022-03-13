import { useGenres } from "../../context/GenresContext";
import Movie from "./Movie";
import "./style/genresMovies.css";
const GenresMovies = () => {
  let { genreMovies, genreName } = useGenres();

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="genre-heading">{genreName}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-3 movies__item">
          {genreMovies.map((movie) => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenresMovies;
