import React, { useState } from "react";
import { useGlobalContext } from "../lib/MoviesContext";
import { NavLink } from "react-router-dom";
import { FaSearch, FaAlignRight, FaTimes } from "react-icons/fa";
import "./styles/navbar.css";

const Header = () => {
  const {
    types,
    categories,
    handleTypeSelect,
    handleCategorieSelect,
    searchQuery,
    setSearchQuery,
    handleSearch,
  } = useGlobalContext();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const capitalizeTxt = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
            {categories.map((category) => {
              return category.id === 3 ? (
                <li key={category.id} className="nav-item">
                  <NavLink
                    to="/"
                    onClick={() => handleCategorieSelect(category)}
                    className="nav-link mx-0 mx-md-2"
                  >
                    {category.category}
                  </NavLink>
                </li>
              ) : null;
            })}
            {types.map((type) => (
              <li
                key={type.id}
                onClick={() => handleTypeSelect(type)}
                className="nav-item"
              >
                <NavLink to="/" className="nav-link mx-0 mx-md-2">
                  {capitalizeTxt(type.type)}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink exact to="/blog" className="nav-link mx-0 mx-md-2 ">
                Blog
              </NavLink>
            </li>
          </ul>

          {/* search */}
          <form onSubmit={handleSearch}>
            <div className="search__container">
              <input
                className="search__input"
                type="text"
                name="query"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search__btn">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
