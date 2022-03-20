import React from "react";
import { useTv } from "../../context/TvContext";
import TvEpisodesPaginate from "../pagination/TvEpisodesPaginate";
import SingleEpisode from "./SingleEpisode";

const AllEpisode = () => {
  const { currentEpisode } = useTv();
  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-10 col-md-9 p-4 tv__item">
          {currentEpisode.map((singleSeason) => (
            <SingleEpisode key={singleSeason._id} singleSeason={singleSeason} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="border__top border__bottom">
          <TvEpisodesPaginate itemsPerPage={2} />
        </div>
      </div>
    </>
  );
};

export default AllEpisode;
