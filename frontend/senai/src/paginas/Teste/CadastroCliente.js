import React, {useState} from 'react';
import api from '../services/api';

function CadastroCliente() {

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            endereco,
            telefone
        };

        try {
            console.log(dados);
            const response = await api.post('cliente', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do cliente é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar cliente " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Cliente</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Nome do cliente"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        placeholder="Endereço"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}/> 

                    <input 
                        placeholder="Telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar Livro</button>
                </form>
    

            </div>
        </div>

    );
}

export default CadastroCliente;