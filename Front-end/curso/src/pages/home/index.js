import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from '../../auth/auth'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './styles.css';

const Home = () => {

    const { logout } = useContext(Auth)
    const handleLogout = () => {
        logout();
    }

    
    const [cursos, setCursos] = useState([])
    const navigate = useNavigate();
    
    const meusCursos = () => {
        navigate('/meusCursos')
    }

    const listarCursos = async () => {
        try {
            const resp = await axios.get('http://192.168.0.14:4000/cursos/disponiveis');
            setCursos(resp.data)
            console.log("CURSOS", resp.data)
        } catch(err) {
            console.log("Error", err)
        }

    }

    useEffect(()=>{        
        listarCursos();
      }, [setCursos])


    const idUsuario = localStorage.getItem('id')

    const inscricao = async (id) => {
        console.log("ID DO CURSO", id)
        try {
            const resp = await axios.post(`http://192.168.0.14:4000/inscricoes/${idUsuario}`, {
                
            data_inscricao: new Date(),
            cursoId: id
            });
            if(resp.data)
                toast.success("Inscrição realizada com sucesso!");
                listarCursos();
        } catch(err) {
            toast.error(err.response.data);
            console.log("Error", err)
        }
    }

    return (
        <>
            <h1 className="title">Página Inicial</h1>
            <button onClick={handleLogout} >Logout</button>
            <button onClick={meusCursos} >Meus Cursos</button>

            <h2>Cursos Disponíveis</h2>
            
            {/* <button onClick={listarCursos}>Listar Cursos</button> */}
            
                {cursos?.map((curso) => 
                    <div key={curso.id} className="card">                        
                        <h1><span>Curso </span> {curso.nome}</h1>
                        <p><span>Descrição: </span> {curso.descricao}</p>
                        <p><span>Data de Início:</span> {curso.data_inicio}</p>
                        <p><span>Quantidade de Inscritos:</span> {curso.inscritos}</p>
                        <button onClick={ () => inscricao(curso.id)} className="inscrever">Inscrever</button>
                    </div>
                )}            

        </>
    );

    
}

export default Home;