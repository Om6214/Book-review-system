import React from "react";
import "./Minicard.css";
import { useAuth } from "../storage/auth";
import { useNavigate } from "react-router-dom";

const Minicard = () => {
    const { book , setbookId } = useAuth();
  const navigate = useNavigate();
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
  
  const newarray = book.sort((a, b) => b.Avgrating - a.Avgrating).slice(0, 6);
  return (
    <div className="minicardcontainer">
      {newarray.map((curEle, index) => {
        const { Img, Title, Author, Description, Pages, Link, Genre, _id } =
          curEle;
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
  );
};

export default Minicard;
