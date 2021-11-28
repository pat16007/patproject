import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 550 }}
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
              <br></br>
              <Grid item xs={4}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Link to={"/newstockexchange"} style={{ textDecoration: 'none' }}>
                <Button variant="contained">New Stock Exchange </Button>
              </Link>
              <Link to={"/newemployeeexchange"} style={{ textDecoration: 'none' }}>
                <Button variant="contained">New Employee Exchange </Button>
              </Link>
              </Grid>
          </Grid>
        </Container>

      </Box>
      
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>

            <Grid item  xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                  Stock Exchange
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={"/stock-exchange"} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="view">View</Button>
                  </Link>
                </CardActions>
              </Card>

              
            </Grid>

            <Grid item  xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Employee Exchange
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={"/employee-exchange"} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="view">View</Button>
                  </Link>
                </CardActions>
              </Card>

              
            </Grid>

            <Grid item  xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    News
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={"/news"} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="view">View</Button>
                  </Link>
                </CardActions>
              </Card>

              
            </Grid>

        </Grid>
      </Container>
    </main>
      {/* Footer */ }
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
  {/* End footer */ }
    </ThemeProvider >
  );
}