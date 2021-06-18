const database = require('../database/database');

exports.getLogin = function(loginID){
    return database.query('select * from cliente where idlivro = $1',[loginID]);
}

exports.saveLogin = function(login){
    return database.one('insert into cliente (nome,endereco,telefone) values($1,$2,$3) returning *',
    [login.nome,login.endereco,login.telefone]);
}