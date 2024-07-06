import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useAuth } from "../storage/auth";
import "./Collection.css";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const Navigate = useNavigate()
  const { Category } = useAuth();
  const [genreBook, setGenreBook] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const variant = isMobile ? "h6" : "h5"; 
  const handleTransfer=(Img, Title, Author, Description,Pages,Link,Genre )=>{
    Navigate('/extra', { state: {Img, Title, Author, Description,Pages,Link,Genre } });
  }


  const getBooksByGenre = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/book/getbook/${Category}`,
        {
          method: "GET",
        }
      );
      const res = await response.json();
      if (response.ok) {
        setGenreBook(res.data);
      } else {
        console.error("Error fetching books:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (Category) {
      getBooksByGenre();
    } else {
      console.log("Category is not defined");
    }
  }, [Category]);

  return (
    <div className="container">
      <div className="GenreCard">
        {genreBook.map((curEle, index) => {
          const { Img, Title, Author, Description,Pages,Link,Genre } = curEle;
          return (
            <Card
              key={index}
              style={{
                backgroundColor: "#333",
                color: "white",
                maxWidth: isMobile ? 180 : 345,
                height: isMobile ? 270 : "auto",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height={isMobile ? "100" : "190"}
                image={Img}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant={isMobile ? "body2" : variant}
                  component="div"
                >
                  {Title}
                </Typography>
            
              </CardContent>
              <CardActions>
                <Button
                onClick={()=>{handleTransfer(Img, Title, Author, Description,Pages,Link,Genre )}}
                  style={{
                    width: isMobile ? null : "133px",
                    fontSize: isMobile ? "8px" : "16px",
                  }}
                  size="small"
                >
                  View More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
