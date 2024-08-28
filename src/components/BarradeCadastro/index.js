import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import './style.css'

function BarraDeCadastro(){
    
    return (
        <Box sx={{ flexGrow: 1 }}>
          

        <AppBar position="static" className='barra-navegação'>
          <Toolbar>
            
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, 
                color: "white", 
                display:"flex", 
                alignItems:"center",
                justifyContent: "center",
                fontSize:"250%",
                fontFamily:"initial"
                }}>
              Cadastre-se
            </Typography>
            
          </Toolbar>
        </AppBar>
        
      </Box>
    )
}

export default BarraDeCadastro;