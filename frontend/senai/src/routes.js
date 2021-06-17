import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloMessage from './paginas/Teste/HelloMessage';
import ListarLivro from './paginas/Teste/Livro';
import ListarLivros2 from './paginas/Teste/Livro2';
import CadastroLivro from './paginas/Teste/CadastroLivro';
import CadastroCliente from './paginas/Teste/CadastroCliente';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={HelloMessage} />
                <Route path='/livro' exact={true} component={ListarLivro} />
                <Route path='/livros' exact={true} component={ListarLivros2} />
                <Route path='/cadastroLivro' exact={true} component={CadastroLivro} />
                <Route path='/cadastroCliente' exact={true} component={CadastroCliente} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;