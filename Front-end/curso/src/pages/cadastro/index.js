import React, { useRef, useContext } from 'react';
import { Auth } from "../../auth/auth";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


const Cadastro = () => {
    const ref = useRef();
    const { cadastrar } = useContext(Auth)
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        this.setState({
          itemvalues: [{}]
        });
      };
   
    const handleSubmit = async (event) => {
        console.log("EVENT", event);
        event.preventDefault();
        
        const nome = event.target.elements.nome.value;
        const login = event.target.elements.login.value;
        const email = event.target.elements.email.value;
        const role = event.target.elements.role.value;
        const senha = event.target.elements.senha.value
        try {
            
            const response = await axios.post('http://192.168.0.14:4000/usuarios', { 
                 nome,
                 login,
                 email,
                 role,
                 senha
            
            })
            console.log("response", response)
            if(response)
                toast.success("Usuário cadastrado com sucesso!");
                handleReset();
        } catch (err) {
            console.log("erro", err)
            toast.error(err?.response?.data);
        }

        
    }
    return (
        <div id="login">
            <h1>Cadastro de Usuário</h1>
        
            <form className="form" onSubmit={handleSubmit} ref = {ref}>

                <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" required className="nome" name="nome"/>
                </div>

                <div className="field">
                    <label htmlFor="login">Login</label>
                    <input type="login" required className="login" name="login" />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" required className="email" name ="email" />
                </div>

                <div className="field">
                    <label htmlFor="role">Role</label>
                    <input type="role" required className="role" name="role" />
                </div>

                <div className="field">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" required className="senha" name="senha"/>
                </div>

                <div className="acao">
                    <button type='submit' className="logar">Cadastrar</button>

                </div>

            </form>
            <p>Já possui login?<br/>
            </p>
            <button onClick={login} className="btn-cadastrar">Fazer Login</button>
        </div>
    )
}

export default Cadastro;