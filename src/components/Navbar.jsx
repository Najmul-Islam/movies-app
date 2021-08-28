import React, { useState, useEffect, useContext } from "react";
import { useGlobalContext } from "../TypeContext";
import { NavLink } from "react-router-dom";
import { FaSearch, FaAlignRight, FaTimes } from "react-icons/fa";
import "./styles/navbar.css";

const Header = () => {
  const { types } = useGlobalContext();

  const [search, setSearch] = useState("");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const capitalizeTxt = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark py-1 border__bottom bg__dark">
      <div className="container-fluid">
        {/* logo */}
        <span className="navbar-brand fs-2">
          <img src="images/vmovee.png" alt="logo" className="navbar__logo" />
        </span>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span>
            {isNavCollapsed ? (
              <FaAlignRight className="fs-2 hamburge text__secondery" />
            ) : (
              <FaTimes className="fs-2 text__secondery" />
            )}
          </span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          {/* navlink */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <span className="nav-link mx-0 mx-md-2">All</span>
            </li>
            {types.map((type) => (
              <li
                // onClick={() => handleTypeSelect(type)}
                key={type.id}
                className="nav-item"
              >
                <span className="nav-link mx-0 mx-md-2">
                  {capitalizeTxt(type.type)}
                </span>
              </li>
            ))}
            {/* <li className="nav-item">
              <NavLink exact to="/blog" className="nav-link mx-0 mx-md-2 ">
                Blog
              </NavLink>
            </li> */}
          </ul>

          {/* search */}
          <div className="search__container">
            <form onSubmit={handleSubmit}>
              <input
                className="search__input"
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="search__btn" type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
