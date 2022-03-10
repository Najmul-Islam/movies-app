import React from "react";
import { Outlet } from "react-router-dom";
import { useMoives } from "../context/MoviesContext";
import Sidebar from "../components/sidebar/Sidebar";
import Pagination from "../components/pagination/Pagination";
// import "./style/movies.css";

const MoviesLayout = () => {
  const {
    allMovies,
    currentPage,
    pageSize,
    categories,
    selectedCategorie,
    genres,
    selectedGenre,
    handlePageChange,
    handleCategorieSelect,
    handleGenreSelect,
  } = useMoives();

  return (
    <>
      <div className="container-fluid">
        <div className="border__right">
          <div className="row">
            <Outlet />
            <div className="col-xl-2 col-md-3 d-none d-md-block">
              <Sidebar
                categories={categories}
                selectedCategorie={selectedCategorie}
                onCategorieSelect={handleCategorieSelect}
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreSelect={handleGenreSelect}
              />
            </div>

            <Pagination
              itemsCount={allMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesLayout;
