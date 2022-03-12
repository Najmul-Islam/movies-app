import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGenres } from "../../context/GenresContext";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style/catergory.css";

const Category = () => {
  const { genres, handleGenreSelect } = useGenres();
  console.log("from category: ", genres);

  const options = {
    responsiveClass: true,
    nav: true,
    autoplay: false,
    autoWidth: true,
    margin: 10,
    dots: false,
    navText: [
      `<i class="bi bi-chevron-left prev-btn" aria-hidden="true"></i>`,
      `<i class="bi bi-chevron-right next-btn" aria-hidden="true"></i>`,
    ],
    smartSpeed: 500,
  };

  useEffect(() => {}, [genres, handleGenreSelect]);

  return (
    <div className="bg__dark border__bottom mx-4 cursor__pointer">
      <OwlCarousel {...options} className="owl-container container-fluid">
        {genres.map((genre) => (
          <NavLink to={`/movies/genres/${genre.genre.toLowerCase()}`}>
            <span
              key={genre.id}
              onClick={() => handleGenreSelect(genre)}
              className="item text__primery category"
            >
              {genre.genre}
            </span>
          </NavLink>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Category;
