import React from "react";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./Inside.css";

const Inside = () => {
  const location = useLocation();
  const { Img, Title, Author, Description, Pages, Link, Genre } =
    location.state;
  let bulletPoints = Description.split(".")
    .filter((sentence) => sentence.trim() !== "") // Filter out any empty strings
    .map((sentence) => `<li>${sentence.trim()}.</li>`)
    .join("");
  return (
    <>
      <div className="container">
        <img className="img-fluid" src={Img} alt={Title} />
        <p id="Title">{Title}</p>
        <div className="bookinfo">
          <p className="book">
            <span>Book</span> : {Title}
          </p>
          <p className="book">
            <span>Pages</span> : {Pages}
          </p>
          <p className="book">
            <span>Genre</span> : {Genre}
          </p>
          <p className="book">
            <span>Rating</span> :{" "}
            <Rating
              style={{ position: "absolute" }}
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="container">
        <span id="About">About the book</span>
        <ul className="lists"
          style={{ textAlign: "start",width:"97%" }}
          dangerouslySetInnerHTML={{ __html: bulletPoints }}
        ></ul>
      </div>
    </>
  );
};

export default Inside;
