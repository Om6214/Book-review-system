import React, { useState } from "react";
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
  const [variant, setVariant] = useState("h5");

  const { book } = useAuth();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {book.map((curEle, index) => {
        const { Img, Title, Author, Description } = curEle;
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
              <Typography
                variant="body2"
                style={{ fontSize: isMobile ? "10px" : "16px" }}
                color="white"
              >
                {Description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  width: isMobile ? null : "133px",
                  fontSize: isMobile ? "8px" : "16px",
                }}
                size="small"
              >
                View Reviews
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default ResponsiveCard;
