import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/compat/app';
import { AuthContext } from '../Auth';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '50%',
  maxHeight: '50%',
});





export default function BasicTable({ id }) {

  const [offer, setOferr] = useState(null);

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

  useEffect(() => {
    const ref = firebase.database().ref("Offer").orderByChild("offerid").equalTo(id);

    ref.on("value", function (snapshot) {
      const offerData = []
      snapshot.forEach(data => {
        offerData.push({
          id: data.key,
          ...data.val()
        });
      })
      setOferr(offerData)
    });

  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="left">Offer Details</TableCell>
            <TableCell align="center">By</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Contact</TableCell>
            {/* <TableCell align="center"></TableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
          {offer?.map((row, index) => (
            <TableRow
              key={index + 1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">
                {row.imgUrl ?
                  <Box align="center"
                    sx={{ height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <CardMedia

                      component="img"
                      sx={{
                        // 16:9
                        height: '50px', width: "50px",
                        pt: '0%',
                      }}
                      src={row.imgUrl}
                    />
                  </Box>
                  : null
                }
              </TableCell>
              <TableCell align="left">{row.item}</TableCell>
              <TableCell align="center">{row.companyName}</TableCell>
              <TableCell align="center">{row.date && new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(row.date).toString()}</TableCell>
              {user?.uid == row?.uid ?
                <TableCell align="center">{row.phone}</TableCell>
                : <TableCell align="center">xxxxxxxxxx</TableCell>
              }

              {/* <TableCell align="center">
              <Button variant="contained" onClick={deleteData}>Delete Post</Button>
                </TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
