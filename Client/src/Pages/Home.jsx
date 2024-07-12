import React from "react";
import Hero from "../Components/Hero";
import Minicard from "../Components/Minicard";
import Footer from "../Components/Footer";
import { useAuth } from "../storage/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { book } = useAuth();
  const newbook = book.slice(0,6)
  const handleTransfer = (
    Img,
    Title,
    Author,
    Description,
    Pages,
    Link,
    Genre,
    _id
  ) => {
    navigate("/extra", {
      state: { Img, Title, Author, Description, Pages, Link, Genre, _id },
    });
    setbookId(_id);
  };
  return (
    <>
      <Hero />
      <div className="top-rated-books">
        <header className="home-container">
          <p
            className="cm-page-title"
            style={{ borderBottomColor: "#58949c", padding: "10px" }}
          >
            <span style={{ backgroundColor: "#58949c" }}>Book Reviews</span>
          </p>
          <div className="taxonomy-description">
            <p>So many books, so little time! Isnt it?</p>
            <p>
              To save you from the trouble, read the review before you select
              your next read. Or may be check out the book reviews and if they
              sound interesting and prominent to you, you can add it up on your
              wish list.
            </p>
            <p>
              Under this section, you will find honest and independent book
              reviews by me. However, if there are any paid collaborations, I
              will always put a disclaimer about the same. Kindly note that paid
              collaborations does not mean that my views will be adulterated. If
              I disliked a book, I will be very transparent about it.
            </p>
          </div>{" "}
        </header>
        <h1 id="About" style={{ marginBottom: "30px" }}>
          Top Rated books
        </h1>
        <Minicard />
      </div>
      <h1 id="About" style={{ marginBottom: "30px" }}>
          Most Popular books
        </h1>
      <div className="bookgenre">
        <>
        <div className="minicardcontainer">
          {newbook.map((curEle, index) => {
            const { Img, Title, Author, Description, Pages, Link, Genre, _id } =curEle;
            return (
              <div className="minicard" key={index}>
                <img className="minicardimg" src={Img} alt="hero" />
                <div className="content">
                  <p id="headingpara">{Title}</p>
                  <div className="infor">
                    <p style={{ fontSize: "13px" }}>{Author}</p>
                    <button
                      className="minicardbutton"
                      style={{ fontSize: "13px" }}
                      onClick={() => {
                        handleTransfer(
                          Img,
                          Title,
                          Author,
                          Description,
                          Pages,
                          Link,
                          Genre,
                          _id
                        );
                      }}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default Home;
