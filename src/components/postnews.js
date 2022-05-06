import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

import { styled } from '@mui/material/styles';

import StockTable from './stocktable';
import { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/compat/app';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../Auth';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

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
  let history = useHistory();
  const query = useQuery();
  const [postData, setPostData] = useState(null)
  query.get("id")
  console.log(query.get("id"))

  const [user, setUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const ref = firebase.database().ref("Profile");
    ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
      setUser(snapshot.val());
    });


  }, [currentUser])

  useEffect(() => {
    const ref = firebase.database().ref("News");
    ref.once('value').then((snapshot) => {
      snapshot.forEach(function (data) {
        if (data.key == query.get("id")) {
          setPostData(data.val())
        }
      });
    });
  }, [query])

  const deleteData = () => {
    const ref = firebase.database().ref("News");
    ref.once('value').then((snapshot) => {
      snapshot.forEach(function (data) {
        if (data.key == query.get("id")) {
          data.ref.remove();
        }
      });
    });

    history.push("/news")
  }

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
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {postData?.title}
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item sx={{ width: 256, height: 256 }}>
              <Img alt="complex" src={postData?.imgUrl} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography variant="subtitle1" gutterBottom>
                  {postData?.description}
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Container><br></br>
        {user?.uid.toString() == "nYzWz3U2jUR923foMImeZMTjAto2" ?
          <Grid align="center">
            <Button variant="contained" onClick={deleteData}>Delete Post</Button>
          </Grid>
          : null
        }

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
    </ThemeProvider>
  );
}