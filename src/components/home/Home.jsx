import React from "react";
import MoviesCarousel from "./MoviesCarousel";
import HomeMovies from "./HomeMovies";
import HomeTvSeason from "./HomeTvSeason";

const Home = () => {
  return (
    <>
      {/* <MoviesCarousel /> */}
      <HomeMovies />
      <HomeTvSeason />
    </>
  );
};

export default Home;
