import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack} from "@mui/material";
import Button from '@mui/material/Button';
import { Dialog,  DialogActions, DialogTitle, DialogContent,  } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";

function CardCadastro() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box
            sx={{
                marginTop: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "500px"

                }}
            >

                <Stack spacing={2}>


                    <b>Nome:</b>
                    <TextField required id="nome-usuario" name="Nome" type="text" sx={{ display: "flex" }} />

                    <b>CPF:</b>
                    <TextField required id="cpf-usuario" name="CPF" type="textfild" placeholder="Ex: 000.000.000-00" inputProps={{
                        maxLength: 14,
                    }}
                        sx={{ display: "flex" }} />

                    <b>Data de nascimento:</b>
                    <TextField required id="idade-usuario" name="Data de nascimento" type="date" sx={{ display: "flex" }} />

                    <b>Tipo sanguineo:</b>
                    <TextField id="tipo-Sanguineo" name="Tipo Sanguíneo" type="text" placeholder="A+, B+, AB+, O+, A-, B-, AB-, O-" sx={{ display: "flex" }} />

                    <b>Cartão do SUS:</b>
                    <TextField required id="sus-usuario" name="Cartão do SUS" type="text" placeholder="Ex: 000000000000000"
                        inputProps={{ maxLength: 15, }}
                        sx={{ display: "flex" }} />

                    <b>Telefone:</b>
                    <TextField requerid id="Telefone-usuario" name="Telefone" type="tel" placeholder="Ex: (11)99999-9999"
                        inputProps={{ maxLength: 14, }}
                        sx={{ display: "flex" }} />

                    <b>Endereço:</b>
                    <TextField required id="endereco-usuario" name="Endereço" type="text" placeholder="Rua:" sx={{ display: "flex" }} />

                    <b>Email:</b>
                    <TextField required id="email-usuario" name="Email" type="email" placeholder="exemplo@gmail.com" sx={{ display: "flex" }} />

                    <b>Senha:</b>
                    <TextField required id="senha-usuario" name="Senha" type="password" sx={{ display: "flex" }} />

                    <b>Confirmar Senha:</b>
                    <TextField required id="confirma-senha-usuario" name="Confirmar Senha" type="password" sx={{ display: "flex" }} />


                    <Button variant="contained"
                        onClick={handleClickOpen}
                        sx={{
                            color: "white",
                            backgroundColor: "#11BBD9",
                            fontFamily: "inherit"

                        }}
                    >
                        Cadastrar
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
                            <DialogTitle>Parabéns seu cadastro foi realizado com sucesso! </DialogTitle>

                            <DialogContent>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        
                                    }}
                                >

                                    <CheckIcon sx={{
                                        fontSize: "400%",
                                        color: "green",
                                       
                                    }} />
                                </Box>


                            </DialogContent>
                            <DialogActions>

                                <Button type="submit" onClick={() => { navigate("/servico") }}>Agendar Consulta</Button>
                            </DialogActions>
                        </Dialog>
                    </Button>



                </Stack>



            </Box>






        </Box>


    );
}

export default CardCadastro