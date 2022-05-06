import * as React from 'react';

import Album from './album';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from "react-slick";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AuthContext } from '../Auth';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';

export default function SimpleSlider() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    const ref = firebase.database().ref("News");

    ref.on("value", function (snapshot) {
      const cardData = []
      snapshot.forEach(data => {
        cardData.push({
          id: data.key,
          ...data.val()
        });
      })
      setCards(cardData)
    });

  }, [])




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const imagesItem = cards?.map(card => (<div><Card
    sx={{ height: '256px', width: "100%", padding: "0 8px", display: 'center', flexDirection: 'column' }}
  >
    <Link to={"/post-news?id=" + card.id} style={{ textDecoration: 'none' }}>
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '0%',
        }}
        image={card?.imgUrl}
      />
    </Link>
  </Card>


  </div>))
  return (
    <div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            News
          </Typography>

          <div>

            <Slider {...settings}>
              {imagesItem}
            </Slider>
          </div>

        </Container>

      </Box>

      <Album />
    </div >
  );
}
