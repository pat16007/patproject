import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../Auth';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const EditProfile = () => {
    let history = useHistory();
    const [user, setUser] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        const ref = firebase.database().ref("Profile");
        ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
            const userData = snapshot.val();
            setUser(userData);
            setFirstName(userData.firstName)
            setLastName(userData.lastName)
            setCompanyName(userData.companyName)
            setPhone(userData.phone)
        });


    }, [currentUser])

    const Updateprofile = () => {
        const ref = firebase.database().ref("Profile")
        ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
            snapshot.ref.update({
                companyName,
                firstName,
                lastName,
                phone,
            });

        })

        history.push("/profile")
    }



    //     useEffect(() => {
    //         const ref = firebase.database().ref("Profile");
    //         ref. {
    //             setUser(snapshot.val());
    //         });


    // }, [currentUser])

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
                        Edit Profile
                    </Typography>
                    <Box component="form" noValidate onSubmit={Updateprofile} sx={{ mt: 3 }}>
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
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    onChange={handleOnChangePhone}
                                    value={phone}
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    name="phone"

                                />
                            </Grid>
                        </Grid>
                        <br></br>
                        <Grid item
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Link to={"/profile"} style={{ textDecoration: 'none', color: '#000000' }}>
                                <Button color="grey"
                                    variant="contained">Back
                                </Button>
                            </Link>
                            <Button
                                onClick={Updateprofile}
                                variant="contained">Update Profile
                            </Button>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider >
    );
}

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

export default EditProfile;