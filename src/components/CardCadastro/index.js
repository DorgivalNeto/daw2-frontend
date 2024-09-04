import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
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

                    <TextField required id="nome-usuario" label="Nome" sx={{ display: "flex" }} />
                    <TextField required id="cpf-usuario" label="CPF" type="number" sx={{ display: "flex" }} />
                    <TextField required id="idade" label="Idade" type="date" sx={{ display: "flex" }} />
                    <TextField id="fator rh" label="Tipo sanguineo (opcional)" sx={{ display: "flex" }} />
                    <TextField required id="sus-usuario" label="Cartão do SUS" type="number" sx={{ display: "flex" }} />
                    <TextField required id="telefone-usuario" label="Telefone" type="number" sx={{ display: "flex" }} />
                    <TextField required id="endereco-usuario" label="Endereço" sx={{ display: "flex" }} />
                    <TextField required id="email-usuario" label="Email" type="email" sx={{ display: "flex" }} />
                    <TextField required id="senha-usuario" label="Senha" sx={{ display: "flex" }} />
                    <TextField required id="confirma-senha-usuario" label="Confirmar Senha" sx={{ display: "flex" }} />

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