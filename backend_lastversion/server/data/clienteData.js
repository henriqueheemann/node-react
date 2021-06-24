const database = require('../database/database');
//var md5 = require('md5');

exports.getCliente = function(clienteID){
    return database.query('select * from cliente where idlivro = $1',[clienteID]);
}

exports.saveCliente = function(cliente){
    return database.one('insert into cliente (nome,endereco,telefone,senha) values($1,$2,$3,$4) returning *',
    [cliente.nome,cliente.endereco,cliente.telefone,cliente.senha]);
}