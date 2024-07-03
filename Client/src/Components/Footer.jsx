import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3" style={{margin:"auto"}}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-body-secondary">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="#" className="nav-link px-2 text-body-secondary">
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="#" className="nav-link px-2 text-body-secondary">
            Pricing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="#" className="nav-link px-2 text-body-secondary">
            FAQs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="#" className="nav-link px-2 text-body-secondary">
            About
          </NavLink>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
  );
};

export default Footer;
