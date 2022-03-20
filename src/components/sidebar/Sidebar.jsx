import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

import "./style/sidebar.css";

const Sidebar = ({ genres, handleGenreSelect, link }) => {
  // const { genres, handleGenreSelect } = useGenres();
  console.log("genres", genres);
  return (
    <div className="sidebar bg__dark">
      {/* Genres */}
      <div className="sidebar__nav mt-4 ">
        <h5>Genres</h5>
        <ul className="nav flex-column sidebar__genres">
          {genres.map((genre) => (
            <li key={genre.id} className="nav-item">
              <NavLink to={`${link}/${genre.genre.toLowerCase()}`}>
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
