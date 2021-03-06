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

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../Auth';
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';

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

const NewStockExchange = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [condition, setCondition] = useState('');
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');

  const [subdistrict, setSubdistrict] = useState(null);
  const [district, setDistrict] = useState(null);
  const [province, setProvince] = useState(null);
  const [zipcode, setZipcode] = useState(null);

  const [image, setImage] = useState(null);


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


  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
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
  const handleChangeCondition = (event) => {
    setCondition(event.target.value);
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


  const CrateMaterialExchange = () => {
    console.log(uuidv4())
    const storage = firebase.storage();
    const storageRef = storage.ref().child(uuidv4());
    storageRef.put(image).then((snapshot) => {
      storageRef.getDownloadURL().then((imgUrl) => {
        const MaterialExchangeRef = firebase.database().ref('Material Exchange')
        const MaterialExchange = {

          title,
          companyName,
          email,
          phone,
          condition,
          item,
          //location,
          district,
          province,
          zipcode,
          endDate: date.getTime(),
          date: Date.now(),
          uid: user.uid,
          imgUrl,
        };

        MaterialExchangeRef.push(MaterialExchange);

      });

    });



  };

  const imageurl = image ? URL.createObjectURL(image) : "https://firebasestorage.googleapis.com/v0/b/sme-social-4d6db.appspot.com/o/27002.jpg?alt=media&token=421a8575-84d7-4c64-9879-5186ef877b8c"

  if (!currentUser || !user) {
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
              <Link to={"/stock-exchange"} style={{ textDecoration: 'none', color: '#000000' }}>
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
              New Material Exchange
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
                  onChange={handleOnChangeTitle}
                  value={title}
                  id="title"
                  name="title"
                  label="Post title"
                  variant="standard"
                />
                <br></br>
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
                  variant="filled"
                />
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DateTimePicker
                    renderInput={(props) => <TextField id="date" name="date" variant="standard"{...props} />}
                    label="Ending Date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                </LocalizationProvider>
                <br></br>
                <FormControl variant="standard" fullWidth required>
                  <InputLabel id="condition">Condition</InputLabel>
                  <Select
                    labelId="condition"
                    id="condition"
                    label="Condition"
                    value={condition}
                    onChange={handleChangeCondition}
                  >
                    <MenuItem value={"Have to take all item"}>Have to take all item</MenuItem>
                    <MenuItem value={"Can separate item"} >Can separate item</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  required
                  onChange={handleOnChangeItem}
                  value={item}
                  name="item"
                  id="item"
                  label="Item"
                  variant="standard" />
                <br></br>
                <Typography variant="subtitle1" gutterBottom>
                  *Please specify each item and amount.
                </Typography>

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
                  <Link to={"/stock-exchange"} style={{ textDecoration: 'none', color: '#000000' }}>
                    <Button color="grey"
                      variant="contained">Cancel
                    </Button>
                  </Link>
                  <Link to={"/stock-exchange"} style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={CrateMaterialExchange}
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
export default NewStockExchange;