import React from "react";
import { Outlet } from "react-router-dom";
import { useTvGenres } from "../context/TvGenresContext";
import Sidebar from "../components/sidebar/Sidebar";

const TvLayout = () => {
  const { tvGenres, handleTvGenreSelect } = useTvGenres();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-md-9">
            <Outlet />
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block border__left border__right border__bottom">
            <Sidebar
              genres={tvGenres}
              handleGenreSelect={handleTvGenreSelect}
              link="/tv-series/genres"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TvLayout;
