import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              News
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur. Tellus mauris a diam maecenas sed enim ut. Eros donec ac odio tempor. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam.
            </Typography>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>


            </Grid>
          </Container>

        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2} container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            {cards.map((card) => (
              <Paper
              elevation={3}
               sx={{
                p: 3,
                margin: '10px',
                maxWidth: 1000,
                gap: 2}}>
                <Grid item key={card} container spacing={4} sm container >
                  <Grid item sx={{ width: 256, height: 256 }}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start">
                    <Img alt="complex" src="https://source.unsplash.com/random" />
                  </Grid>
                  <Grid item xs={12} sm container >
                    <Grid item xs container direction="column" spacing={2}
                    >
                      <Grid item xs container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start">
                        <Typography variant="subtitle1" gutterBottom >
                          Heading
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>

                      </Grid>
                      <Grid item xs container
            direction="column"
            justifyContent="center"
            alignItems="flex-start">

                        <Link to={"/details"} style={{ textDecoration: 'none' }}>
                          <Button size="small" variant="view">View</Button>
                        </Link>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>

        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          SME social
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider >
  );
}