import React, {useState} from 'react';
import api from '../services/api';

function Login() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        const dados = {
            nome,
            senha
        };

        try {
            console.log(dados);
            const response = await api.post('cliente', dados);
            console.log(response.data);
            // history.push('/');
        } catch (error) {
            alert("Erro em login: " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Login</h1>

                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="Nome do cliente"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}/> 

                    <button className="button" type="submit">login</button>
                </form>
    

            </div>
        </div>

    );
}

export default Login;