import * as React from 'react';
import { useContext } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
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

import { AuthProvider } from '../Auth';
import { AuthContext } from '../Auth';
import firebaseConfig from '../config';

const ProfileButton = () => {
  let history = useHistory();
  // const { currentUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const logOut = () => {
  //     useContext(() => firebaseConfig.auth().signOut());
  // };
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <div>
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
        <Link to={"/signin"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
          <MenuItem onClick={handleClose}>Sign In</MenuItem>
        </Link>
        <Link to={"/signup"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
          <MenuItem onClick={handleClose}>Register</MenuItem>
        </Link>

      </Menu>

    </div>
      ;
  }

  return (
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
        <Link to={"/profile"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to={"/home"} style={{ textDecoration: 'none', color: '#1E1E1E' }}>
          <MenuItem onClick={() => firebaseConfig.auth().signOut()}>Sign Out</MenuItem>
        </Link>

      </Menu>

    </div >
  )
}

export default ProfileButton;