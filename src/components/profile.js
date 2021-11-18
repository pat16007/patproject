import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <Img alt="complex" src="https://source.unsplash.com/random" />
              <br></br>
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
                  John Doe
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  john.doe@email.com
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  +66800000000
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  1 Chalong Krung 1 Alley, Lat Krabang, Bangkok 10520
                </Typography>
                <br></br>
                <Grid item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <br></br>
                  <Button
                    variant="contained">Change Password
                  </Button>
                  <Button
                    variant="contained">Edit Profile
                  </Button>
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