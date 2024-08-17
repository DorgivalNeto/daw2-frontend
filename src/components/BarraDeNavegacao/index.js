import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './style.css'

function BarraDeNavegacao(){
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='barra-navegação'>
          <Toolbar>
            {
            /*<IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>*/}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
              Olá, Dorgival
            </Typography>
            <Button color="inherit" sx= {{ color: "black"}}>Agendar Consulta</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default BarraDeNavegacao;