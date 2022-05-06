import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

import { useContext } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { AuthContext } from '../Auth';
import firebaseConfig from '../config';
import firebase from 'firebase/compat/app';

const NewsBTN = () => {
  const [user, setUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    useEffect(() => {
      const ref = firebase.database().ref("Profile");
      ref.orderByChild("uid").equalTo(currentUser.multiFactor.user.uid).on("child_added", function (snapshot) {
        setUser(snapshot.val());
      });


    }, [currentUser])
      ;
  }
  if (user?.uid.toString() == "nYzWz3U2jUR923foMImeZMTjAto2") {
    return <Link to={"/newnews"} style={{ textDecoration: 'none' }}>
      <Button variant="contained">Create News </Button>
    </Link>
      ;
  }

  return (
    <div></div>

  )
}

export default NewsBTN;