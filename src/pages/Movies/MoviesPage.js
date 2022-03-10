import React from "react";
import { Outlet } from "react-router-dom";
import Movies from "../../components/movies/Movies";

const MoviesPage = () => {
  return (
    <div className="container-fluid">
      <div className="border__right">
        <Movies />
      </div>
    </div>
  );
};

export default MoviesPage;
