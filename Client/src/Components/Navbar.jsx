import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuth } from "../storage/auth";

const Navbar = () => {
  const { isLoggedin,setCategory } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleCollapse = () => setIsExpanded(false);
    const handleExpand = () => setIsExpanded(true);

    const navbar = document.getElementById('navbarNavDropdown');
    navbar.addEventListener('hide.bs.collapse', handleCollapse);
    navbar.addEventListener('show.bs.collapse', handleExpand);

    return () => {
      navbar.removeEventListener('hide.bs.collapse', handleCollapse);
      navbar.removeEventListener('show.bs.collapse', handleExpand);
    };
  }, []);

  const handleCategoryClicked = (category) => {
    setCategory(category)
  }

  return (
    <nav style={{ backgroundColor: "#666466" }} className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
          Navbar
        </a>
        <button
          className={`navbar-toggler ${isExpanded ? 'collapsed' : ''}`}
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink style={{color:"white"}} className="nav-link active" aria-current="page" to="/">
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
                Review
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
                  <NavLink className="dropdown-item" to="/collection" onClick={()=>{handleCategoryClicked('Manga')}}>
                    Manga
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/collection" onClick={()=>{handleCategoryClicked('horror')}}>
                    Horror
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/collection" onClick={()=>{handleCategoryClicked('mystry')}}>
                    Mystry
                  </NavLink>
                  <NavLink className="dropdown-item" to="/collection" onClick={()=>{handleCategoryClicked('fiction')}}>
                    Fiction
                  </NavLink>
                </li>
              </ul>
            </li>
            {isLoggedin ? (
              <>
                <li className="nav-item">
                  <NavLink id="logoutbtn" className="nav-link btnNav" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <div className="btnNav d-flex">
                <li className="nav-item">
                  <NavLink style={{marginRight:"5px"}} className="nav-link" to="/login">
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
