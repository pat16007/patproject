
import * as React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

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
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/home">
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/stock-exchange"} style={{ textDecoration: 'none' , color: '#FFF' }} > 
                <Button color="secondary" variant="stockexchange">Stock Exchange</Button> 
              </Link>
              <Link to={"/employee-exchange"} style={{ textDecoration: 'none' , color: '#FFF' }}> 
                <Button color="secondary" variant="employeeexchange">Employee Exchange</Button> 
              </Link>
              <Link to={"/news"} style={{ textDecoration: 'none' , color: '#FFF' }}> 
                <Button color="secondary" variant="news">News</Button> 
              </Link>
            </Typography>
            
            <div>
              <IconButton
                aria-label="account"
                color="secondary"
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Link to={"/profile"} style={{ textDecoration: 'none' , color: '#1E1E1E' }}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to={"/signin"} style={{ textDecoration: 'none' , color: '#1E1E1E' }}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to={"/signup"} style={{ textDecoration: 'none' , color: '#1E1E1E' }}>
                  <MenuItem onClick={handleClose}>Sing up</MenuItem>
                </Link>
              </Menu>
            </div>

          </Toolbar>
        </AppBar>
      </Box>

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
      </Switch>
    </Router>
  );
}

