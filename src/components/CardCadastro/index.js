import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";

function CardCadastro() {



    return (
        <Box
            sx={{

            }}
        >
            <Box>
                <Stack spacing={4}>

                    <TextField required id="nome-usuario" label="Nome" sx={{ display: "flex" }} />
                    <TextField required id="cpf-usuario" label="CPF" sx={{ display: "flex" }} />
                    <TextField required id="sus-usuario" label="Cartão do SUS" sx={{ display: "flex" }} />
                    <TextField required id="telefone-usuario" label="Telefone" sx={{ display: "flex" }} />
                    <TextField required id="endereco-usuario" label="Endereço" sx={{ display: "flex" }} />
                    <TextField required id="email-usuario" label="Email" sx={{ display: "flex" }} />
                    <TextField required id="senha-usuario" label="Senha" sx={{ display: "flex" }} />
                    <TextField required id="confirma-senha-usuario" label="Confirmar Senha" sx={{ display: "flex" }} />


                </Stack>

            </Box>



        </Box>


    );
}

export default CardCadastro