import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { api, createSession } from '../services/api'

export const Auth = createContext(); 

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('token');

        if(recoveredUser) {
            setUser(recoveredUser);
        }

        setLoading(false)
    }, [])

    const logar = async (login, senha) => {
        const dadosLogin = {login: login, senha: senha}
        // console.log("LOGIN Auth: ", dadosLogin)
        try {
            const response = await createSession(login, senha)
            console.log("LOGIN Auth: data ", response.data.accessToken) 
            const usuarioLogado = response.data.login;
            const token = response.data.accessToken;
            const id = response.data.id;
    
            localStorage.setItem("user", usuarioLogado)
            localStorage.setItem("token", token)
            localStorage.setItem("id", id)
    
            api.defaults.headers.Authorization = `Bearer: ${token}`            
                
            setUser(usuarioLogado)
            navigate("/")
        } catch(err) {
            console.log("ERRO===>", err)
            toast.error(err.response.data.message)
        }

        
    }

    const logout = () => {
        console.log("LOGOUT") 
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate("/login")
    }

    return(
        <>
        <Auth.Provider value={{authenticated: !!user, user, loading, logar, logout}}>
            {children}
        </Auth.Provider>
     
            <ToastContainer autoClose={4000} position={toast.POSITION.TOP_CENTER}/>
          
        </>
    )
}