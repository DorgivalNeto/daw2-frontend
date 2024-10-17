import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import {useStorege } from "../../security/Authprovider"
import api from "../../services/api";



const Copyright = (props) => {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();




function TelaLogin() {

    const navigate = useNavigate();
    const { login } = useStorege();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const fazerLogin = () => {

        if (email.trim() != "" && senha.trim() != "") {
            api.login(

                {
                    identifier: email,
                    password: senha,
                }
            ).
            then((response) => {
                login (response.data.jwt)
                navigate("/inicio")

                
     }).catch((error) => { 
        console.log(error)
     })
        }


        login();
        navigate("/servico")
    }

    return (

        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" display="flex">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingX: { xs: 2, sm: 3 },
                        paddingY: 4,
                        borderRadius: 1,
                        boxShadow: 5,
                        alignItems: "center",
                        marginTop: 5,





                    }}
                >
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                            justifyContent: "center",
                            minWidth: "320px",
                            maxWidth: "1120px"
                        }}
                    >

                        <img src={Logo} alt="Logo" style={{ width: '350px', height: 'auto', marginBottom: '20px' }} />
                        <Box component="form" noValidate sx={{ mt: 1 }}>



                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                type="email"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={() => { fazerLogin() }}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Entrar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Esqueceu a Senha?
                                    </Link>
                                </Grid>
                                <Grid item>

                                    <Link href="#" variant="body2" onClick={() => { navigate("/cadastro") }}>
                                        Cadastra-se aqui!

                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'center',
                                alignItems: 'center',
                            }}
                        >


                        </Box>
                    </Box>
                </Box>

            </Container>

        </ThemeProvider>


    );
}

export default TelaLogin;
