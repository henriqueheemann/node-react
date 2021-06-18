const database = require('../database/database');

exports.getCliente = function(clienteID){
    return database.query('select * from cliente where idlivro = $1',[clienteID]);
}

exports.saveCliente = function(cliente){
    return database.one('insert into cliente (nome,endereco,telefone) values($1,$2,$3) returning *',
    [cliente.nome,cliente.endereco,cliente.telefone]);
}