import React from 'react'
import "./Review.css"
import ImgMediaCard from "../Components/Card";
const Review = () => {
  return (
    <>
      <h1>Discover the book with exiting reviews</h1>
      <div className="container">
        <div className="carddiv">
          <ImgMediaCard />
        </div>
      </div>
    </>
  )
}

export default Review