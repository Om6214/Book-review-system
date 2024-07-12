import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuth } from "../storage/auth";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedin, setCategory, book, setSearchResults } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize Fuse.js
  const fuse = new Fuse(book, {
    keys: ["Title", "Genre", "Author"],
  });

  useEffect(() => {
    const handleCollapse = () => setIsExpanded(false);
    const handleExpand = () => setIsExpanded(true);

    const navbar = document.getElementById("navbarNavDropdown");
    navbar.addEventListener("hide.bs.collapse", handleCollapse);
    navbar.addEventListener("show.bs.collapse", handleExpand);

    return () => {
      navbar.removeEventListener("hide.bs.collapse", handleCollapse);
      navbar.removeEventListener("show.bs.collapse", handleExpand);
    };
  }, []);

  const handleCategoryClicked = (category) => {
    setCategory(category);
  };

  const handleSearch = (e) => {
    navigate("/result");
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      const results = fuse.search(searchQuery);
      setSearchResults(results.map((result) => result.item));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav
      style={{ backgroundColor: "rgb(96, 62, 62)" }}
      className="navbar navbar-expand-lg sticky-top"
    >
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${isExpanded ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={{ color: "white" }}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">
                Book Reviews
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collection
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/collection"
                    onClick={() => {
                      handleCategoryClicked("Manga");
                    }}
                  >
                    Manga
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/collection"
                    onClick={() => {
                      handleCategoryClicked("Horror");
                    }}
                  >
                    Horror
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/collection"
                    onClick={() => {
                      handleCategoryClicked("Mystery");
                    }}
                  >
                    Mystery
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/collection"
                    onClick={() => {
                      handleCategoryClicked("Autobiography");
                    }}
                  >
                    Autobiography
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/collection"
                    onClick={() => {
                      handleCategoryClicked("Fiction");
                    }}
                  >
                    Fiction
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button  className="searchButton" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isLoggedin ? (
              <li className="nav-item">
                <NavLink
                  id="logoutbtn"
                  className="nav-link btnNav"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <div className="btnNav d-flex">
                <li className="nav-item">
                  <NavLink
                    style={{ marginRight: "5px" }}
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
