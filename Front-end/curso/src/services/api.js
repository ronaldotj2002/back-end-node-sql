import axios from "axios";

export const api = axios.create({
    baseUrl: "http://localhost:4000",
})


export const createSession = async (login, senha) => {
    // return api.post("http://192.168.0.14:3001/auth/login/"
    return api.post("http://192.168.0.14:4000/auth/login/", {
        login:login, senha:senha
    });
}