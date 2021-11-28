import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  });

function createData(number,image , offerdetails, by, date, contact) {
  return { number, image, offerdetails, by, date, contact,};
}

const rows = [
  createData('1', <Img alt="complex" src="https://source.unsplash.com/random" />, "Tuna 3 Kg", "Jxxx", "07/18/2014", "+66800000000"),
  createData('2', <Img alt="complex" src="https://source.unsplash.com/random" />, "Onion 5 Kg", "Sxxx", "07/18/2014", "+666800000000"),
  createData('3', <Img alt="complex" src="https://source.unsplash.com/random" />, "Cream 100 ml 10 Box", "Mxxx", "07/18/2014", "+66800000000"),
];

export default function BasicTable() {
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
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.image}</TableCell>
              <TableCell align="left">{row.offerdetails}</TableCell>
              <TableCell align="center">{row.by}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
