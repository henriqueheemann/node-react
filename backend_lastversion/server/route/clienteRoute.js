const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const clienteService = require('../service/clienteService');
//var md5 = require('md5');

router.get('/clientes',async function(req,res){
    const clientes = await clienteService.getClientes();
    res.json(clientes);
});

router.get("/cliente/:id",async function(req,res){
    const cliente = await clienteService.getCliente(req.params.id);
    res.json(cliente);
 
});

router.delete('/cliente/:id',async function(req,res){
   return res.json([{message:'registro excluido com sucesso'}]); 
});

router.post('/cliente',async function(req,res) {
    const cliente = req.body;
    const newCliente = await clienteService.saveCliente(cliente);
    res.json(newCliente);
});

module.exports =router;