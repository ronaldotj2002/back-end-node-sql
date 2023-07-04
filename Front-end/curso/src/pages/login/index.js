import React, { useState, useContext } from 'react';
import { Auth } from "../../auth/auth";
import { useNavigate } from "react-router-dom";
import './styles.css';


const Login = () => {

    const navigate = useNavigate();
    const { authenticated, logar } = useContext(Auth)

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login Submit", {login, senha})

        logar(login, senha)
    }

    const cadastrar = () => {
        console.log("Cadastrar... route")
        navigate("/cadastro");
    }

    return (
        <div id="login">
            <h1 className="">Login do Sistema</h1>
            <form className="form" onSubmit={handleSubmit}>

                <div className="field">
                    <label htmlFor="login">Login</label>
                    <input type="text" className="login" required 
                    value={login} onChange={(event) => setLogin(event.target.value)} />
                </div>

                <div className="field">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" className="senha" required 
                    value={senha} onChange={(event) => setSenha(event.target.value)} />
                </div>

                <div className="acao">
                    <button type='submit' className="logar">Logar</button>

                </div>

            </form>

            <p class="cad">Não Possui LOGIN?<br/>
            Cadastre-se </p>
            
            <button onClick={cadastrar} className='btn-cadastrar'>Cadastrar</button>
        </div>
    )
}

export default Login;