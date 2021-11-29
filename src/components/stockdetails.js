import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { styled } from '@mui/material/styles';

import StockTable from './stocktable';

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
              Listing Details
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item sx={{ width: 256, height: 256 }}>
              <Img alt="complex" src="https://source.unsplash.com/random" />
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
                    Ending :
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Condition :
                  </Typography>
                  <br></br>
                  <Typography variant="subtitle1" gutterBottom>
                    Item :
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
                  08/18/2021 09:11 pm
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Take All *Have to take all for take the items that listed
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Tomato Can : 3 KG
                  Salmon : 5 KG
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Wattana
                </Typography>
                <br></br>
                <Grid item >
                  <Button
                    variant="contained">Make an offer
                  </Button>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Offer Ending 08/18/2021 09:11 pm
          </Typography>
          <StockTable />
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