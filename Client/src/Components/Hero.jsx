import React from 'react';
import { NavLink } from 'react-router-dom';
import './Hero.css';
import { useAuth } from '../storage/auth';

const Hero = () => {
    const {isLoggedin}=useAuth();
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Book Reviews</h1>
        <p>Discover and review your favorite books</p>
        <NavLink to={isLoggedin?"/review":"/login"} className="herobtn">Get Started</NavLink>
      </div>
    </div>
  );
};

export default Hero;
