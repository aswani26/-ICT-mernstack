import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid, GridLegacy } from '@mui/material';

const CardGet = () => {
  const [pro, setPro] = useState([]);


    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setPro(res.data);
        console.log(res.data);
      })
     
  

  return (
    <div >
        <Grid container spacing={2}>
          {pro.map((val) => (
        <Card sx={{ maxWidth: 345 }} key={val.id}>
          <CardMedia
            sx={{ height: 140 }}
            image={val.image}
            title={val.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {val.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {val.description.substring(0, 80)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
      </Grid>
    </div>
  );
};

export default CardGet;
