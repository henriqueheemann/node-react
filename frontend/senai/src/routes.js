import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloMessage from './paginas/Teste/HelloMessage';
import ListarLivro from './paginas/Teste/Livro';
import ListarLivros from './paginas/Teste/Livros';
import CadastroLivro from './paginas/Teste/CadastroLivro';
import CadastroCliente from './paginas/Teste/CadastroCliente';
import Login from './paginas/Teste/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={HelloMessage} />
                <Route path='/livro' exact={true} component={ListarLivro} />
                <Route path='/livros' exact={true} component={ListarLivros} />
                <Route path='/cadastroLivro' exact={true} component={CadastroLivro} />
                <Route path='/cadastroCliente' exact={true} component={CadastroCliente} />
                <Route path='/login' exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;