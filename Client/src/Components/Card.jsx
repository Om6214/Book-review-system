import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImgMediaCard=()=> {
  return (
    <Card style={{backgroundColor:"#333",color:"white"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpeLimybAQ6nC8n15rx120yCLYWqzYNU1TvL5ysp1sl5CAX9rP1lGlnQKecErefEGHK2w&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book Name
        </Typography>
        <Typography variant="body2" color="white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid praesentium qui illum, architecto libero quod consequatur quisquam magni doloremque eum quo nam!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Reviews</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard