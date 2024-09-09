import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack, div } from "@mui/material";
import Button from '@mui/material/Button';

function Cadastroadm() {

    return(
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

                    
                    <p>Nome:</p>
                    <TextField required id="nome-usuario" name="Nome" type="text"sx={{ display: "flex" }} />
                    <p>CPF:</p>
                    <TextField required id="cpf-usuario" name="CPF" type="text" placeholder="000.000.000-00" sx={{ display: "flex" }} />
                    <p>Data de nascimento:</p>
                    <TextField required id="idade-usuario" name="Data de nascimento" type="date"sx={{ display: "flex" }} />
                    <p>Telefone:</p>
                    <TextField requerid id="Telefone-usuario" name="Telefone" type="tel"  placeholder="(11) 99999-9999" sx={{ display: "flex"}} />
                    <p>Endereço:</p>
                    <TextField required id="endereco-usuario" name="Endereço" type="text" placeholder="Rua:" sx={{ display: "flex" }} />
                    <p>Email:</p>
                    <TextField required id="email-usuario" name="Email" type="email" placeholder="exemplo@gmail.com" sx={{ display: "flex" }} />
                    <p>Senha:</p>
                    <TextField required id="senha-usuario" name="Senha" type="password" sx={{ display: "flex" }} />
                    <p>Confirmar Senha:</p>
                    <TextField required id="confirma-senha-usuario" name="Confirmar Senha" type="password" sx={{ display: "flex" }} />

                    <Button variant="contained" sx={{
                        color: "white",
                        backgroundColor: "#11BBD9",
                        fontFamily: "inherit"

                    }}>Cadastrar Administrador</Button>


                </Stack>

            </Box>






        </Box>
    )
}

export default Cadastroadm;