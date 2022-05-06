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

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              </Grid>
              <br></br>
              <div>
                <Button
                  variant="contained"
                  aria-label="account"
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  New Exchange Post

                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <Link to={"/newstockexchange"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
                    <MenuItem onClick={handleClose}>Material Exchange</MenuItem>
                  </Link>
                  <Link to={"/newemployeeexchange"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
                    <MenuItem onClick={handleClose}>Employee Exchange</MenuItem>
                  </Link>
                </Menu>
              </div>
            </Grid>
          </Container>

        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Link to={"/stock-exchange"} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="https://img.freepik.com/free-photo/balanced-nutrition-concept-clean-eating-flexitarian-mediterranean-diet-top-view-flat-nutrition-clean-eating-food-concept-diet-plan-with-vitamins-minerals-salmon-shrimp-mix-vegetables_1150-44787.jpg?w=2000&t=st=1651598749~exp=1651599349~hmac=1ae053e29d1d004c46a10689e806256f665c9929df7917312ee44b30780a2052"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Material Exchange
                    </Typography>
                    <Typography>
                      Function created for exchanging your material of your businesses with other businesses. This function allows businesses to exchange materials that they do not need for materials that other companies do not need. This allows materials to be used efficiently by companies that want it and the materials will not go to waste.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/stock-exchange"} style={{ textDecoration: 'none' }}>
                      <Button size="small" variant="view">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Link>


            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Link to={"/employee-exchange"} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-professional-confident-asian-real-estate-broker-drinking-coffee-carry-laptop-her-way-client_1258-59115.jpg?w=2000&t=st=1651655630~exp=1651656230~hmac=984d712dd72404dba60264985b86772265fd4281aa469aa530d2ef84f6aea350"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Employee Exchange
                    </Typography>
                    <Typography>
                      Function created for exchange or sharing your employees of your businesses with others. This function allows for share of employees across businesses to help businesses find the right employee for the job very similar to outsourcing but done though exchange.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/employee-exchange"} style={{ textDecoration: 'none' }}>
                      <Button size="small" variant="view">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Link>


            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Link to={"/news"} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image="https://img.freepik.com/free-photo/headlines_1101-727.jpg?t=st=1651655687~exp=1651656287~hmac=6c11ab2c3044a2f5f34bf466ce4680e18817c3736894057dc0a304a34422e93a&w=2000"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      News
                    </Typography>
                    <Typography>
                      Function created for updating the latest news and checking the latest news that can be financial for your businesses. This function allows user to check for new news on the page that can help with business decisions.

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/news"} style={{ textDecoration: 'none' }}>
                      <Button size="small" variant="view">View</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Link>


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
    </ThemeProvider >
  );
}