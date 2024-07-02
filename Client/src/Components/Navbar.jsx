import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { useAuth } from "../storage/auth";

const Navbar = () => {
  const { isLoggedin } = useAuth();
  return (
    <div className="navcontainer">
      <ul className="naav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <div className="dropdown">
            <NavLink to="/Collection" className="dropbtn">Collection</NavLink>
            <div className="dropdown-content">
              <NavLink href="#">Manga</NavLink>
              <NavLink href="#">Motivation</NavLink>
              <NavLink href="#">Story</NavLink>
              <NavLink href="#">Autobiography</NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/review">Write a review</NavLink>
        </li>
      </ul>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for books"
        />
        <a href="#">
          <img className="searchimg " src="search.png" alt="" />
        </a>
      </div>
      <div className="btn">
        {isLoggedin ? (
          <>
            <NavLink to="/logout">Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/Login">Sign in</NavLink>
            <NavLink to="/Register">Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
