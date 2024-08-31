import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from "@mui/material";



const createData = (name, Date, Time) => {
  return { name, Date, Time };
}

const rows = [
  createData('Dorgival Neto', '12/08', '13:00'),
  createData('David Torres', '12/08', '13:30'),
  createData('Vagner Melo', '12/08', '14:00'),
  createData('Cristiano Ronaldo', '12/08', '14:30'),
  createData('Neymar Junior', '12/08', '15:00'),
  createData('Lionel Messi', '12/08', '15:30'),
  createData('Elo Musk', '12/08', '16:00'),
  createData('Naruto Uzumaki', '12/08', '16:30'),
  createData('Sasuke Uchira', '12/08', '17:00'),
];



function Cardlist() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ fontFamily: "inherit", fontSize: "60%", }}>NOME</TableCell>
            <TableCell align="right" sx={{ fontFamily: "inherit", fontSize: "60%" }}>DATA</TableCell>
            <TableCell align="right" sx={{ fontFamily: "inherit", fontSize: "60%" }}>HORA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
              <Chip label="Chip Filled" />

              </TableCell>
              <TableCell align="right" sx={{alignItems:"baseline"}}>{row.Date}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}


export default Cardlist; {

}