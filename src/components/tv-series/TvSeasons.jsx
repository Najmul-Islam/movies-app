import { useTv } from "../../context/TvContext";
import TvSeasonsPaginate from "../pagination/TvSeasonsPaginate";
import SingleSeason from "./SingleSeason";
import "./css/tv-seasons.css";

const TvSeasons = () => {
  const { currentSeries } = useTv();

  return (
    <>
      <div className="row">
        <div className="col tv__item">
          {currentSeries.map((singleSeason) => (
            <SingleSeason key={singleSeason._id} singleSeason={singleSeason} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="border__top border__bottom">
          <TvSeasonsPaginate itemsPerPage={50} />
        </div>
      </div>
    </>
  );
};

export default TvSeasons;
