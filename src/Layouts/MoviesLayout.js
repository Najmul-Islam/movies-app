import React from "react";
import { Outlet } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";
import Sidebar from "../components/sidebar/Sidebar";

const MoviesLayout = () => {
  const { genres, selectedGenre, handleGenreSelect } = useMovies();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-md-9">
            <Outlet />
          </div>
          <div className="col-xl-2 col-md-3 d-none d-md-block">
            <Sidebar
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesLayout;
