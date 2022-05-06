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
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { BrowserRouter as Redirect, Link } from 'react-router-dom'
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../Auth';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import InputAddress from 'react-thailand-address-autocomplete'

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

const thailocation = () => {
    let history = useHistory();

    const [user, setUser] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');

    const [Subdistrict, setSubdistrict] = useState(null);
    const [District, setDistrict] = useState(null);
    const [Province, setProvince] = useState(null);
    const [Zipcode, setZipcode] = useState(null);


    useEffect(() => {
        const ref = firebase.database().ref("Profile");
        ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
            const userData = snapshot.val();
            setUser(userData);
            setSubdistrict(userData.subdistrict)
            setDistrict(userData.district)
            setProvince(userData.province)
            setZipcode(userData.zipcode)
        });


    }, [currentUser])



    const Updateprofile = () => {
        const ref = firebase.database().ref("Profile")
        ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
            console.log(Subdistrict)
            snapshot.ref.update({

                subdistrict: Subdistrict,
                district: District,
                province: Province,
                zipcode: Zipcode,
            });

        })

        history.push("/profile")
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
    }
    const handleOnChangeSubdistrict = (e) => {
        setSubdistrict(e.target.value);
    }
    const handleOnChangeDistrict = (e) => {
        setDistrict(e.target.value);
    }
    const handleOnChangeProvince = (e) => {
        setDistrict(e.target.value);
    }
    const handleOnChangeZipcode = (e) => {
        setDistrict(e.target.value);
    }

    function onSelect(fullAddress) {
        const { subdistrict, district, province, zipcode } = fullAddress
        setSubdistrict(subdistrict)
        setDistrict(district)
        setProvince(province)
        setZipcode(zipcode)


    }

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
                        Set Location
                    </Typography>
                    <Box component="form" noValidate onSubmit={Updateprofile} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                Subdistrict
                                <InputAddress
                                    address="subdistrict"
                                    value={Subdistrict}
                                    onChange={handleOnChangeSubdistrict}
                                    onSelect={onSelect}
                                />

                                Province
                                <InputAddress
                                    address="province"
                                    value={Province}
                                    onChange={handleOnChangeProvince}
                                    onSelect={onSelect}
                                />
                                Zipcode
                                <InputAddress
                                    address="zipcode"
                                    value={Zipcode}
                                    onChange={handleOnChangeZipcode}
                                    onSelect={onSelect}
                                />


                            </Grid>
                            <Grid item xs={12} sm={6}>

                                District
                                <InputAddress
                                    address="district"
                                    value={District}
                                    onChange={handleOnChangeDistrict}
                                    onSelect={onSelect}
                                />
                            </Grid>

                            <Grid item xs={12}>

                            </Grid>
                        </Grid>
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
                                variant="contained">Update Location
                            </Button>
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


export default thailocation;