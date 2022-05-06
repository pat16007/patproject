import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useContext } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import { AuthContext } from '../Auth';
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';

import { styled } from '@mui/material/styles';


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

const Profile = () => {
  const [user, setUser] = useState(null);


  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const ref = firebase.database().ref("Profile");
    ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
      setUser(snapshot.val());
    });


  }, [currentUser])



  if (!currentUser || !user) {
    return <ThemeProvider theme={theme}>
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
              You Not Logged In
            </Typography>
            <Grid item
              container
              direction="row"
              justifyContent="center"
              alignItems="center">
              <br></br>
              <Link to={"/home"} style={{ textDecoration: 'none', color: '#000000' }}>
                <Button color="grey"
                  variant="contained">Go Back
                </Button>
              </Link>
              <Link to={"/signin"} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained">Sign in
                </Button>
              </Link>
            </Grid>
          </Container>
        </Box>

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
      ;
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
              Profile
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} justifyContent="center"
            alignItems="center">
            <Grid item sx={{ width: 256, height: 256 }}>

              <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center">
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="subtitle1" gutterBottom >
                    Name :
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom >
                    Company Name :
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Email :
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Phone :
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Location :
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle1" gutterBottom>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {user.companyName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {user.email}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {user.phone}
                </Typography>
                {user.subdistrict == '' || user.subdistrict == null ?
                  <Typography variant="subtitle1" gutterBottom>
                    Location not set
                  </Typography>
                  : <Typography variant="subtitle1" gutterBottom>
                    {user.district}, {user.province}, {user.zipcode}
                  </Typography>
                }
                <br></br>
                <Grid item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <br></br>
                  <Link to={"/setlocation"} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained">Edit Location
                    </Button>
                  </Link>
                  <Link to={"/editprofile"} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained">Edit Profile
                    </Button>
                  </Link>
                  <br></br>
                </Grid>
              </Grid>

            </Grid>
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
    </ThemeProvider>
  );
}

export default Profile;
