import React from "react";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="top-rated-books">
        <h1>Top Rated books</h1>
      </div>
    </>
  );
};

export default Home;
