import * as React from 'react';
import { useState } from 'react';
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

import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


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

export default function Album() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  const CreateNews = () => {
    console.log(uuidv4())
    const storage = firebase.storage();
    const storageRef = storage.ref().child(uuidv4());
    storageRef.put(image).then((snapshot) => {
      storageRef.getDownloadURL().then((imgUrl) => {
        const NewsRef = firebase.database().ref('News');
        const News = {

          title,
          description,
          date: Date.now(),
          imgUrl,
        };

        NewsRef.push(News);
      });

    });

  };

  const imageurl = image ? URL.createObjectURL(image) : "https://firebasestorage.googleapis.com/v0/b/sme-social-4d6db.appspot.com/o/27002.jpg?alt=media&token=421a8575-84d7-4c64-9879-5186ef877b8c"

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
              Create News
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
                  multiline
                  rows={10}
                  maxRows={20}
                  onChange={handleOnChangeDescription}
                  value={description}
                  id="description"
                  name="description"
                  label="Description"
                  variant="standard"
                />
                <br></br>

                <Grid item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <br></br>
                  <Link to={"/news"} style={{ textDecoration: 'none', color: '#000000' }}>
                    <Button color="grey"
                      variant="contained">Cancel
                    </Button>
                  </Link>
                  <Link to={"/news"} style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={CreateNews}
                      variant="contained">Create
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