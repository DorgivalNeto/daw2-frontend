import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost;1337/api",
});

export const createUsuario = async (Usuario) =>{
    return await api.post("/mais-saude", Usuario);

};

export const login = async (loginData) =>{
    return await api.post("/auth/local", loginData);
};

export default{
    login,
    createUsuario
};