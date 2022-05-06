import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


import { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/compat/app';
import { AuthContext } from '../Auth';
import 'firebase/compat/storage';

import { v4 as uuidv4 } from 'uuid';


const Input = styled('input')({
  display: 'none',
});

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

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



const NewOffer = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const [subdistrict, setSubdistrict] = useState(null);
  const [district, setDistrict] = useState(null);
  const [province, setProvince] = useState(null);
  const [zipcode, setZipcode] = useState(null);


  const query = useQuery();


  // useEffect(() => {
  //   const ref = firebase.database().ref("Employee Exchange");
  //   ref.once('value').then((snapshot) => {
  //     snapshot.forEach(function (data) {
  //       if (data.key == query.get("id")) {
  //         setPostData(data.val())
  //       }
  //     });
  //   });
  // }, [query])


  if (currentUser) {
    useEffect(() => {
      const ref = firebase.database().ref("Profile");
      ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
        const userData = snapshot.val();
        setUser(userData);
        setCompanyName(userData.companyName)
        setEmail(userData.email)
        setPhone(userData.phone)
        setSubdistrict(userData.subdistrict)
        setDistrict(userData.district)
        setProvince(userData.province)
        setZipcode(userData.zipcode)
      });


    }, [currentUser])
      ;
  }

  const handleOnChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  }
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  }
  const handleOnChangeItem = (e) => {
    setItem(e.target.value);
  }
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  const CreateOffer = () => {
    console.log(uuidv4())
    const storage = firebase.storage();
    const storageRef = storage.ref().child(uuidv4());
    storageRef.put(image).then((snapshot) => {
      storageRef.getDownloadURL().then((imgUrl) => {
        const OfferRef = firebase.database().ref('Offer');
        const offerExchange = {

          offerid: query.get("id"),
          companyName,
          phone,
          date: Date.now(),
          item,
          location,
          uid: user.uid,
          district,
          province,
          zipcode,
          imgUrl,
        };

        OfferRef.push(offerExchange);

      });

    });

  };

  const imageurl = image ? URL.createObjectURL(image) : "https://firebasestorage.googleapis.com/v0/b/sme-social-4d6db.appspot.com/o/27002.jpg?alt=media&token=421a8575-84d7-4c64-9879-5186ef877b8c"

  if (!currentUser) {
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
              <Link to={"/stock-details?id=" + query.get("id")} style={{ textDecoration: 'none', color: '#000000' }}>
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
              Offer
            </Typography>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            <Grid item sx={{ width: 256, height: 256 }}>
              <Img alt="complex" src={imageurl} />
              <br></br>
              <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleChangeImage} />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>

                <TextField
                  required
                  onChange={handleOnChangeCompanyName}
                  value={companyName}
                  id="companyName"
                  name="companyName"
                  label="Company"
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  onChange={handleOnChangeEmail}
                  value={email}
                  id="email"
                  name="email"
                  label="Email"
                  defaultValue="john.doe@email.com"
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  onChange={handleOnChangePhone}
                  value={phone}
                  id="phone"
                  name="phone"
                  label="Phone"
                  defaultValue="+66800000000"
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  onChange={handleOnChangeItem}
                  value={item}
                  name="item"
                  id="item"
                  label="Item"
                  variant="standard" />
                <br></br>
                <FormControl variant="standard" fullWidth required>
                  <InputLabel id="location">Location</InputLabel>
                  <Select
                    labelId="location"
                    id="location"
                    label="Condition"
                    value={location}
                    onChange={handleChangeLocation}
                  >
                    <MenuItem value={"location"}>{district}, {province}, {zipcode}</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <Grid item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <br></br>
                  <Link to={"/stock-details?id=" + query.get("id")} style={{ textDecoration: 'none', color: '#000000' }}>
                    <Button color="grey"
                      variant="contained">Cancel
                    </Button>
                  </Link>
                  <Link to={"/stock-details?id=" + query.get("id")} style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={CreateOffer}
                      variant="contained">Offer
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
export default NewOffer;