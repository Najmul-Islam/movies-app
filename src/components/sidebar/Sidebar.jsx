import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useGenres } from "../../context/GenresContext";
import "./style/sidebar.css";

const Sidebar = () => {
  const { genres, handleGenreSelect } = useGenres();

  return (
    <div className="sidebar bg__dark border__left border__right border__bottom">
      {/* Genres */}
      <div className="sidebar__nav mt-4 ">
        <h5>Genres</h5>
        <ul className="nav flex-column sidebar__genres">
          {genres.map((genre) => (
            <li key={genre.id} className="nav-item">
              <NavLink to={`/movies/genres/${genre.genre.toLowerCase()}`}>
                <span
                  onClick={() => handleGenreSelect(genre)}
                  className="nav-link cursor__pointer sidebar__link"
                >
                  <FaAngleDoubleRight /> {genre.genre}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
