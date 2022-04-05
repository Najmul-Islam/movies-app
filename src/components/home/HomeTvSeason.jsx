import React from "react";
import { useTv } from "../../context/TvContext";
import Loading from "../common/Loading";
import SingleSeason from "../tv-series/SingleSeason";

const HomeTvSeason = () => {
  const { series, isLoading } = useTv();

  if (isLoading) <Loading />;

  return (
    <>
      <div>
        <h1>Recent TV Shows</h1>
      </div>
      <div className="col tv__item">
        {series.slice(0, 20).map((singleSeason) => (
          <SingleSeason key={singleSeason._id} singleSeason={singleSeason} />
        ))}
      </div>
    </>
  );
};

export default HomeTvSeason;
