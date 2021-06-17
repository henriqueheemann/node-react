const database = require('../database/database');

exports.getClientes = function(){
    return database.query('select * from cliente');
}

exports.getCliente = function(clienteID){
    return database.query('select * from cliente where codigo = $1',[clienteID]);
}

exports.deleteCliente = function(clienteID){
    return database.none('delete from cliente where codigo = $1',[clienteID]);
}

exports.saveCliente = function(cliente){
    return database.one('insert into cliente (nome,endereco,telefone) values($1,$2,$3) returning *',
    [cliente.nome,cliente.endereco,cliente.telefone]);
}