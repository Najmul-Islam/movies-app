import { useMovies } from "../../context/MoviesContext";
import Loading from "../common/Loading";
import Movie from "../movies/Movie";

const HomeMovies = () => {
  const { allMovies, isLoading } = useMovies();

  if (isLoading) <Loading />;

  return (
    <>
      <div>
        <h1>Recent Movies</h1>
      </div>
      <div className="col movies__item">
        {allMovies.slice(0, 20).map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default HomeMovies;
