import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom'
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useHistory } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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

const SignUp = () => {
  let history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const subdistrict = "";
  const district = "";
  const province = "";
  const zipcode = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {

      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        setCurrentUser(true)

        const profileRef = firebase.database().ref('Profile');
        const profile = {
          firstName,
          lastName,
          companyName,
          phone,
          subdistrict,
          district,
          province,
          zipcode,

          uid: user.uid,
          email: user.email,
        };

        profileRef.push(profile);


        history.push("/home")
      })


    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }


  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }
  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  }
  const handleOnChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  }
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Typography component="h1" variant="h5">
            This is the demo website
          </Typography>
          <Typography component="h1" variant="h5">
            DO NOT USE YOUR REAL EMAIL
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleOnChangeFirstName}
                  value={firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleOnChangeLastName}
                  value={lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChangeCompanyName}
                  value={companyName}
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleOnChangePhone}
                  value={phone}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                //autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">

            </Grid>
          </Box>
        </Box>
      </Container>
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


export default SignUp;
