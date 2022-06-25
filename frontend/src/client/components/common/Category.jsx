import { NavLink } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./style/catergory.css";

const Category = ({ genres, handleGenreSelect, link }) => {
  return (
    <div className="bg__dark border__bottom cursor__pointer py-1">
      <ScrollingCarousel
        transition={1}
        rightIcon={<FaChevronRight />}
        leftIcon={<FaChevronLeft />}
      >
        {genres.map((genre) => (
          <NavLink to={`${link}/${genre.genre.toLowerCase()}`}>
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
