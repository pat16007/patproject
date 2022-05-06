import * as React from 'react';

import NewsBTN from './newnewsbtn';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import { AuthContext } from '../Auth';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';


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

const theme = createTheme();

export default function Album() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);


  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    useEffect(() => {
      const ref = firebase.database().ref("Profile");
      ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
        setUser(snapshot.val());
      });


    }, [currentUser])
      ;
  }




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

  const handleChangeSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const searchedCard = search === "" ? cards : cards?.filter(card => {
    return card.title?.toLowerCase().includes(search)

  })

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
              Function created for updating the latest news and checking the latest news that can be financial for your businesses. This function allows user to check for new news on the page that can help with business decisions.
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
                    onChange={handleChangeSearch}
                    placeholder="Search"
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
              <br></br>
              <Grid item xs={4}>
                {user?.uid.toString() == "nYzWz3U2jUR923foMImeZMTjAto2" ?
                  <Link to={"/newnews"} style={{ textDecoration: 'none' }}>
                    <Button variant="contained">Create News </Button>
                  </Link>
                  : null
                }
              </Grid>
            </Grid>
          </Container>

        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {searchedCard?.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Link to={"/post-news?id=" + card.id} style={{ textDecoration: 'none' }}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '0%',
                      }}
                      image={card.imgUrl}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
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