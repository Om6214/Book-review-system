import React from "react";
import "./Home.css"
import ImgMediaCard from "../Components/Card";
const Home = () => {
  return (
    <>
      <h1>Discover the book with exiting reviews</h1>
      <div className="carddiv">
        <ImgMediaCard/>
      </div>
    </>
  );
};

export default Home;
