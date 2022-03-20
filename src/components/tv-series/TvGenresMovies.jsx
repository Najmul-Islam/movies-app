import { useTvGenres } from "../../context/TvGenresContext";
import SingleSeason from "./SingleSeason";
import TvGenresPaginate from "../pagination/TvGenresPaginate";

const TvGenresMovies = () => {
  const { tvGenreName, currentTvGenreSeasons } = useTvGenres();

  return (
    <>
      <div className="row">
        <h1 className="genre-heading">{tvGenreName}</h1>
      </div>
      <div className="row">
        <div className="col movies__item">
          {currentTvGenreSeasons.map((singleSeason) => (
            <SingleSeason key={singleSeason._id} singleSeason={singleSeason} />
          ))}
        </div>
      </div>

      <div className="row">
        <div className="border__top border__bottom">
          <TvGenresPaginate itemsPerPage={1} />
        </div>
      </div>
    </>
  );
};

export default TvGenresMovies;
