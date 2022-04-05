import React from "react";
import { Outlet } from "react-router-dom";
import { useGenres } from "../context/GenresContext";
import { useTvGenres } from "../context/TvGenresContext";
import Sidebar from "../components/sidebar/Sidebar";

const HomeLayout = () => {
  const { genres, handleGenreSelect } = useGenres();
  const { tvGenres, handleTvGenreSelect } = useTvGenres();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-md-9">
            <Outlet />
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block border__left border__right border__bottom">
            <div className="row">
              <h1>Movies</h1>
              <Sidebar
                genres={genres}
                handleGenreSelect={handleGenreSelect}
                link="/movies/genres"
              />
            </div>

            <div className="row">
              <h1>TV Series</h1>
              <Sidebar
                genres={tvGenres}
                handleGenreSelect={handleTvGenreSelect}
                link="/tv-series/genres"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
