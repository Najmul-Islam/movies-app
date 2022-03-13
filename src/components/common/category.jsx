import { NavLink } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useGenres } from "../../context/GenresContext";
import "./style/catergory.css";

const Category = () => {
  const { genres, handleGenreSelect } = useGenres();

  return (
    <div className="bg__dark border__bottom cursor__pointer mx-4 py-1">
      <ScrollingCarousel>
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
      </ScrollingCarousel>
    </div>
  );
};

export default Category;
