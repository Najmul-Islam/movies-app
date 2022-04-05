// import React from "react";
// import MoviesCarousel from "./MoviesCarousel";
// import HomeMovies from "./HomeMovies";
// import HomeTvSeason from "./HomeTvSeason";
// import Sidebar from "../sidebar/Sidebar";
// import { useGenres } from "../../context/GenresContext";
// import { useTvGenres } from "../../context/TvGenresContext";

// const Home = () => {
//   const { genres, handleGenreSelect } = useGenres();
//   const { tvGenres, handleTvGenreSelect } = useTvGenres();
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <MoviesCarousel />
//         {/* <div className="col-xl-10 col-md-9"></div> */}
//         {/* <div className="col-xl-2 col-md-3 d-none d-md-block border__left border__right border__bottom">
//           <Sidebar
//             genres={genres}
//             handleGenreSelect={handleGenreSelect}
//             link="/movies/genres"
//           />
//         </div> */}
//       </div>

//       <div className="row">
//         <div className="col-xl-10 col-md-9">
//           <HomeMovies />
//         </div>
//         <div className="col-xl-2 col-md-3 d-none d-md-block border__left border__right border__bottom">
//           <Sidebar
//             genres={genres}
//             handleGenreSelect={handleGenreSelect}
//             link="/movies/genres"
//           />
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-xl-10 col-md-9">
//           <HomeTvSeason />
//         </div>
//         <div className="col-xl-2 col-md-3 d-none d-md-block border__left border__right border__bottom">
//           <Sidebar
//             genres={tvGenres}
//             handleGenreSelect={handleTvGenreSelect}
//             link="/tv-series/genres"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
