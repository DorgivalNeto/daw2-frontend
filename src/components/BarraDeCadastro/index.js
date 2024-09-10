import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";


import './style.css'
import { Button } from "@mui/material";

function BarraDeCadastro() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>


      <AppBar position="static" className='barra-navegação'>
        <Toolbar>


          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "250%",
            fontFamily: "initial"
          }}>
            Cadastre-se
          </Typography>
          <Typography>

            
            <Button color="inherit" onClick={() => { navigate("/login") }}
              sx={{ color: "white", fontFamily: "inherit" }}>
              Sair
            
            </Button>
          </Typography>


        </Toolbar>
      </AppBar>

    </Box>
  )
}

export default BarraDeCadastro;