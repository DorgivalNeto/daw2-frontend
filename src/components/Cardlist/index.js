import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from "@mui/material";


const createData = (name, date, time) => {
  return { name, date, time};
}

const rows = [
  createData('Dorgival Neto', '12/08', '13:00'),
  createData('David Torres', '12/08', '13:30'),
  createData('Vagner Melo', '12/08', '14:00'),
  createData('Cristiano Ronaldo', '12/08', '14:30'),
  createData('Neymar Junior', '12/08', '15:00'),
  createData('Lionel Messi', '12/08', '15:30'),
  createData('Elon Musk', '12/08', '16:00'),
  createData('Naruto Uzumaki', '12/08', '16:30'),
  createData('Sasuke Uchiha', '12/08', '17:00'),
];

function Cardlist() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: "inherit", fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>NOME</TableCell>
              <TableCell align="center" sx={{ fontFamily: "inherit", fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>DATA</TableCell>
              <TableCell align="center" sx={{ fontFamily: "inherit", fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>HORA</TableCell>
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
                <TableCell align="center">
                  {row.date}
                </TableCell>
                <TableCell align="center">
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}

export default Cardlist;{

}
