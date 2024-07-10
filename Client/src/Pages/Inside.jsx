import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./Inside.css";
import { useAuth } from "../storage/auth";
import { useMediaQuery } from "@mui/material";

const Inside = () => {
  const [users, setUsers] = useState({});
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");
  const { review, detail,isLoggedin } = useAuth();
  const userId = detail && detail.length > 0 ? detail[0]._id : null;
  const { Img, Title, Author, Description, Pages, Link, Genre, _id } =
    location.state;
  const [rating, setRating] = useState({
    BookId: _id,
    UserId: userId,
    Comment: "",
    Rate: 0,
  });
  const avgRating= review.reduce((acc,review)=>acc+review.Rate,0)/review.length;

  useEffect(() => {
    const fetchUsers = async () => {
      const uniqueUserIds = [...new Set(review.map((r) => r.UserId))];
      const usersData = {};

      await Promise.all(
        uniqueUserIds.map(async (id) => {
          try {
            const response = await fetch(
              `http://localhost:3000/getusers/${id}`,
              {
                method: "GET",
              }
            );
            if (response.ok) {
              const res = await response.json();
              usersData[id] = res.data;
            }
          } catch (error) {
            console.log(error);
          }
        })
      );
      setUsers(usersData);
    };
    fetchUsers();
  }, [review]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRating((prevRating) => ({
      ...prevRating,
      [name]: value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setRating((prevRating) => ({
      ...prevRating,
      Rate: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isLoggedin){
      try {
        const response = await fetch("http://localhost:3000/Review/addReview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rating),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Review submitted successfully!");
        } else {
          alert("Failed to submit review.");
        }
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert("please login to add review")
    }
  };

  const bulletPoints = Description.split(".")
    .filter((sentence) => sentence.trim() !== "")
    .map((sentence) => `<li>${sentence.trim()}.</li>`)
    .join("");

  return (
    <>
      <div className="container">
        <img className="img-fluid" src={Img} alt={Title} />
        <p id="Title">{Title}</p>
        <div className="bookinfo">
          <p className="book">
            <span>Book</span>: {Title}
          </p>
          <p className="book">
            <span>Pages</span>: {Pages}
          </p>
          <p className="book">
            <span>Author</span>: {Author}
          </p>
          <p className="book">
            <span>Genre</span>: {Genre}
          </p>
          <p className="book">
            <span>Rating</span>:{" "}
            <Rating
              style={{ position: "absolute" }}
              name="half-rating-read"
              value={avgRating}
              precision={0.5}
              readOnly
            />
          </p>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="container">
        <span id="About">About the book</span>
        <ul
          className="lists"
          style={{ textAlign: "start", width: "97%" }}
          dangerouslySetInnerHTML={{ __html: bulletPoints }}
        ></ul>
      </div>
      {review.length > 0 && (
        <div className="container">
          <span id="About">Reviews</span>
          {review.map((curEle, index) => {
            const { BookId, Comment, CreatedAt, Rate, UserId } = curEle;
            const userName = users[UserId]?.[0]?.Name || "Loading...";

            return (
              <div className="review" key={index}>
                <div className="profile">
                  <img src="user.jpeg" alt="" />
                  {userName}
                </div>
                <div className="date">
                  <Rating
                    style={{ position: "absolute"}}
                    name="half-rating-read"
                    value={Rate}
                    precision={0.5}
                    readOnly
                  />
                  <p>{CreatedAt}</p>
                </div>
                <div className="mainRev">
                  <p>{Comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="container">
        <span id="About">Add your review</span>
        <form className="revform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Comment">Review : </label>
            <textarea
              style={{ width: "96%" }}
              rows="10"
              column="20"
              type="text"
              name="Comment"
              id="Comment"
              value={rating.Comment}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Rate">Rating</label>
            <Rating
              name="Rate"
              value={rating.Rate}
              onChange={handleRatingChange}
            />
          </div>
          <button type="submit" className={isMobile?"btn btn-primary btn-sm":"btn btn-primary"}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Inside;
