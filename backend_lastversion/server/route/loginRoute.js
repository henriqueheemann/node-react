const express = require('express');
const { func } = require('../database/database');
const router = express.Router();
const loginService = require('../service/loginService');

router.get("/cliente/:id",async function(req,res){
    const cliente = await loginService.getLogin(req.params.id);
    res.json(cliente);
 
});

router.post('/cliente',async function(req,res) {
    const login = req.body;
    const newLogin = await loginService.saveLogin(login);
    res.json(newLogin);
});

module.exports =router;