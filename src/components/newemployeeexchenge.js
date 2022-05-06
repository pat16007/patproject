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
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

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

const NewEmployeeExchange = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState([new Date(), new Date()]);
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [employee, setEmployee] = useState('');
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
  const handleOnChangeEmployeeNumber = (event) => {
    setEmployeeNumber(event.target.value);
  }
  const handleOnChangeEmployee = (event) => {
    setEmployee(event.target.value);
  }
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  };


  const CrateEmployeeExchange = () => {
    console.log(uuidv4())
    const storage = firebase.storage();
    const storageRef = storage.ref().child(uuidv4());
    storageRef.put(image).then((snapshot) => {
      storageRef.getDownloadURL().then((imgUrl) => {
        const EmployeeExchangeRef = firebase.database().ref('Employee Exchange');
        const EmployeeExchange = {

          title,
          companyName,
          email,
          phone,
          employeeNumber,
          employee,
          //location,
          district,
          province,
          zipcode,
          startTime: duration[0].getTime(),
          endTime: duration[1].getTime(),
          endDate: date.getTime(),
          date: Date.now(),
          uid: user.uid,
          imgUrl,
        };

        EmployeeExchangeRef.push(EmployeeExchange);
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
              <Link to={"/employee-exchange"} style={{ textDecoration: 'none', color: '#000000' }}>
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
              New Employee Exchange
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

                <TextField required
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
                  defaultValue={user.companyName}
                  variant="filled"
                />
                <br></br>
                <TextField
                  required
                  onChange={handleOnChangeEmail}
                  value={email}
                  id="filled-helperText"
                  label="Email"
                  defaultValue={user.email}
                  variant="filled"
                />
                <br></br>
                <TextField
                  onChange={handleOnChangePhone}
                  value={phone}
                  required
                  id="phone"
                  label="Phone"
                  defaultValue={user.phone}
                  variant="filled"
                />
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField id="date" name="name" variant="standard"{...props} />}
                    label="Post End Date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                </LocalizationProvider>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    startText="Start"
                    endText="End"
                    value={duration}
                    onChange={(newValue) => {
                      setDuration(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField id="filled-helperText" variant="standard" {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField id="filled-helperText" variant="standard" {...endProps} />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
                <br></br>
                <TextField
                  required
                  onChange={handleOnChangeEmployeeNumber}
                  value={employeeNumber}
                  name="employeeNumber"
                  id="employeeNumber"
                  label="Number Of Employee"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <br></br>
                <TextField required
                  onChange={handleOnChangeEmployee}
                  value={employee}
                  name="employee"
                  id="employee"
                  label=" Emplyoee"
                  variant="standard"
                />
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
                  <Link to={"/employee-exchange"} style={{ textDecoration: 'none', color: '#000000' }}>
                    <Button color="grey"
                      variant="contained">Cancel
                    </Button>
                  </Link>

                  <Link to={"/employee-exchange"} style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={CrateEmployeeExchange}
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
export default NewEmployeeExchange;