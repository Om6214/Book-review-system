import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
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


const ResponsiveCard = () => {
  const Navigate = useNavigate()
  const [variant, setVariant] = useState("h5");

  const { book,setbookId } = useAuth();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handletransfer= (Img, Title, Author, Description,Pages,Link,Genre,_id)=>{
    Navigate('/extra', { state: {Img, Title, Author, Description,Pages,Link,Genre} });
    setbookId(_id)
  } 

  return (
    <>
      {book.map((curEle, index) => {
        const { Img, Title, Author, Description,Pages,Link,Genre,_id } = curEle;
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
                onClick={()=>{handletransfer(Img, Title, Author, Description,Pages,Link,Genre,_id)}}
                style={{
                  margin:"auto",
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
    </>
  );
};

export default ResponsiveCard;
