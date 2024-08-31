import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../assets/images/logo.png'



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

    const handleSubmit = (event) =>
        event.preventDefault();
    const data = new FormData();
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });



    return (

        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingX: { xs: 2, sm: 3 },
                        paddingY: 4,
                        borderRadius: 1,
                        boxShadow: 5,
                        alignItems:"center",
                        marginTop: 3



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

                        <img src={Logo} alt="Logo" style={{ width: '300px', height: 'auto', marginBottom: '16px' }} />
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lembrar minha senha"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
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
                                    <Link href="#" variant="body2">
                                        {"Cadastre-se aqui!"}
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
