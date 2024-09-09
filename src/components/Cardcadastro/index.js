import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack, div } from "@mui/material";
import Button from '@mui/material/Button';

function CardCadastro() {

    



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

                    
                    <TextField required id="nome-usuario" label="Nome" type="text"sx={{ display: "flex" }} />
                    <TextField required id="cpf-usuario" label="CPF" type="text" max= '11' sx={{ display: "flex" }} />
                    <TextField required id="idade-usuario" label="Data de nascimento" type="date"sx={{ display: "flex" }} />
                    <TextField id="tipo-Sanguineo" label="Tipo Sanguíneo" type="text"/>
                    <TextField required id="sus-usuario" label="Cartão do SUS" type="text" sx={{ display: "flex" }} />
                    <TextField requerid id="Telefone-usuario" name="Telefone" type="tel"  placeholder="(11) 99999-9999" sx={{ display: "flex"}} />
                    <TextField required id="endereco-usuario" label="Endereço" type="text"sx={{ display: "flex" }} />
                    <TextField required id="email-usuario" label="Email" type="email" sx={{ display: "flex" }} />
                    <TextField required id="senha-usuario" label="Senha" type="password" sx={{ display: "flex" }} />
                    <TextField required id="confirma-senha-usuario" label="Confirmar Senha" type="password" sx={{ display: "flex" }} />

                    <Button variant="contained" sx={{
                        color: "white",
                        backgroundColor: "#11BBD9",
                        fontFamily: "inherit"

                    }}>Cadastrar</Button>


                </Stack>

            </Box>






        </Box>


    );
}

export default CardCadastro