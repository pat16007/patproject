
import * as React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProfileButton from './components/profilebutton';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Home from "./components/home";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import News from "./components/news";
import PostNews from "./components/postnews";
import EmployeeExchange from './components/employee';
import StockExchange from './components/stockexchange';
import Profile from './components/profile';
import StockDetails from './components/stockdetails';
import EmployeeDetails from './components/employeedetails';
import NewStockExchange from './components/newstockexchange';
import NewEmployeeExchange from './components/newemployeeexchenge';
import CreateOffer from './components/creatoffer';
import Newnews from './components/newnews';
import EditProfile from './components/editprofile';
import Setlocation from './components/setlocation';

import { AuthProvider } from './Auth';

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AuthProvider>
      <Router>

        <AppBar position="sticky">
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <Link to="/home">
                <CardMedia
                  component="img"
                  sx={{
                    height: '60px', width: "60px", display: 'center', pt: '0%',
                  }}
                  image="https://firebasestorage.googleapis.com/v0/b/sme-social-4d6db.appspot.com/o/14de3b129ed14edfa728f997c3bf9e63-3.png?alt=media&token=bc38c0cf-0012-4222-ac7f-63d81977c43c"
                  alt="14de3b129ed14edfa728f997c3bf9e63-3"

                />
              </Link>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to={"/stock-exchange"} style={{ textDecoration: 'none', color: '#FFF' }} >
                  <Button color="secondary" variant="stockexchange">Material Exchange</Button>
                </Link>
                <Link to={"/employee-exchange"} style={{ textDecoration: 'none', color: '#FFF' }}>
                  <Button color="secondary" variant="employeeexchange">Employee Exchange</Button>
                </Link>
                <Link to={"/news"} style={{ textDecoration: 'none', color: '#FFF' }}>
                  <Button color="secondary" variant="news">News</Button>
                </Link>
              </Typography>

              <div>
                <ProfileButton />
              </div>

            </Toolbar>
          </Box>
        </AppBar>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/news" component={News} />
          <Route path="/post-news" component={PostNews} />
          <Route path="/employee-exchange" component={EmployeeExchange} />
          <Route path="/stock-exchange" component={StockExchange} />
          <Route path="/profile" component={Profile} />
          <Route path="/stock-details" component={StockDetails} />
          <Route path="/employee-details" component={EmployeeDetails} />
          <Route path="/newstockexchange" component={NewStockExchange} />
          <Route path="/newemployeeexchange" component={NewEmployeeExchange} />
          <Route path="/createoffer" component={CreateOffer} />
          <Route path="/newnews" component={Newnews} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/setlocation" component={Setlocation} />

        </Switch>
      </Router>
    </AuthProvider>
  );
}


