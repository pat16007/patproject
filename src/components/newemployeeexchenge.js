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
import TextField from '@mui/material/TextField';


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
              New Employee Exchange
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            <Grid item sx={{ width: 256, height: 256 }}>
              <Img alt="complex" src="https://source.unsplash.com/random" />
              <br></br>
              <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Button
                  variant="contained">
                  Upload
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>

              <TextField required
                  id="filled-basic"
                  label="Post title"
                  variant="standard" 
                  />
                  <br></br>
                <TextField
                  required
                  id="filled-helperText"
                  label="Company"
                  defaultValue="John Doe"
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  id="filled-helperText"
                  label="Email"
                  defaultValue="john.doe@email.com"
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  id="filled-helperText"
                  label="Phone"
                  defaultValue="+66800000000"
                  variant="filled"
                />
                <br></br>
                <TextField required
                  id="filled-basic"
                  label="End Date"
                  variant="standard" />
                <br></br>
                <TextField required
                  id="filled-basic"
                  label="Duration"
                  variant="standard" />
                <br></br>
                <TextField required
                  id="filled-number"
                  label=" Emplyoee"
                  variant="standard"/>
                <br></br>
                <TextField required
                  id="filled-basic"
                  label="Location"
                  variant="standard" />

                <br></br>
                <Grid item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <br></br>
                  <Link to={"/employee-exchange"} style={{ textDecoration: 'none' , color: '#000000'}}>
                  <Button color="grey"
                    variant="contained">Cancel
                  </Button>
                  </Link>
                  <Button
                    variant="contained">Schedule Post
                  </Button>
                  <Link to={"/employee-exchange"} style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained">Post
                  </Button>
                  </Link>
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