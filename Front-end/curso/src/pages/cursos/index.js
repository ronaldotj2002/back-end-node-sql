import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from '../../auth/auth'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './styles.css';

const MeusCursos = () => {

    const { logout } = useContext(Auth)
    const handleLogout = () => {
        logout();
    }
    const [cursos, setCursos] = useState([])
    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    }
    const idUsuario = localStorage.getItem('id')

    const cancelarInscricao = async (id) => {
        console.log("CANCEL", id)
        try {
            const resp = await axios.delete(`http://192.168.0.14:4000/inscricoes/id/${id}`);
            console.log("RESP", resp)
            if(resp)
                toast.success("Sua Matrícula foi cancelada!");   
                listarCursos();         
        } catch(err) {
            console.log("Error", err)
            toast.error("Erro ao Cancelar Matrícula!");
        }

    }

    const listarCursos = async () => {
        try {
            const resp = await axios.get(`http://192.168.0.14:4000/inscricoes/id/${idUsuario}`);
            setCursos(resp.data)
            console.log("CURSOS", resp.data)
             
        } catch(err) {
            console.log("Error", err)
        }

    }

    useEffect(()=>{        
        listarCursos();
      }, [setCursos])
     

    return (
        <>
            <h1 className="title">Meus Cursos</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={home}>Página Inicial</button>
            
            {/* <button onClick={listarCursos}>Listar Cursos</button> */}
            
                {cursos?.map((curso) => 
                    <div key={curso.id} className="card">                        
                        <h1><span>Curso Id: </span> {curso.cursoId}</h1>
                        <p><span>Usuário: </span> {curso.usuarioId}</p>
                        <button onClick={ () => cancelarInscricao(curso.id)} className="cancelar">Cancelar Inscrição</button>
                    </div>
                )}            

        </>
    );

    
}

export default MeusCursos;