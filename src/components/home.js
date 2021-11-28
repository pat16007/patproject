import * as React from 'react';

import Album from './album';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Slider from "react-slick";


export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const images = [
      {
        url: "https://source.unsplash.com/random",
        title: 'Stock Exchange',
      },
      {
        url: "https://source.unsplash.com/random",
        title: 'Employee Exchange',
      },
      {
        url: "https://source.unsplash.com/random",
        title: 'News',
      },
      {
        url: "https://source.unsplash.com/random",
        title: 'News',
      },
      {
        url: "https://source.unsplash.com/random",
        title: 'News',
      },
      {
        url: "https://source.unsplash.com/random",
        title: 'News',
      },
    ];
    const imagesItem = images.map(images => (<div><Card
      sx={{ height: '256px', width: "100%", padding: "0 8px", display: 'center', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '0%',
        }}
        image={images.url}
        alt={images.title}
      />

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
      </div>
    );
  }
}