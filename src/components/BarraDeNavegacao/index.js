import React from "react"
import { AppBar, Dialog, handleClose, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



import './style.css'


function BarraDeNavegacao() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='barra-navegação'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white", fontFamily: "inherit" }}>
            Olá, Dorgival
          </Typography>
          <Button color="inherit" sx={{ color: "white", fontFamily: "inherit" }} onClick={handleClickOpen}>Agendar Consulta</Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const Data = formJson.Data;
            console.log(Data);
            handleClose();
          },
        }}
      >
        <DialogTitle>Agendar consulta</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="Paciente"
            name="Paciente"
            label="Paciente "
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Data"
            name="Data"
            type="date"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            variant="standard"
            name="Horario"
            type="time"
            id="Horario"
            autoComplete="current-Horario"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Agendar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );

}


export default BarraDeNavegacao;
