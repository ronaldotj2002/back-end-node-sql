import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate    
} from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import MeusCursos from './pages/cursos';

import { AuthProvider, Auth } from "./auth/auth";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(Auth)

        if(loading) {
            return <div className="loading">Carregando..</div>
        }
        
        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
        
    }
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/cadastro" element={<Cadastro />}/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/" element={
                        <Private>
                            <Home />
                        </Private>
                    }/>
                    
                    <Route exact path="/meusCursos" element={
                        <Private>
                            <MeusCursos />
                        </Private>
                    }/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}


export default AppRoutes;