const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const porta = 3003;

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
})

const service = restify.createServer();

service.listen(porta, () => {
    console.log("Tudo funcionando por aqui!");
})

service.pre(cors.preflight);
service.use(cors.actual);
service.use(restify.plugins.bodyParser());

const db = require('../database');

service.get('/', (req, res, next) => {
    res.send("Tudo bem por aqui, e por aí?"); 
})


service.get('/pessoa/listar', async (req, res, next) => {
    try {
        res.send(await db.pessoa().all());
    }catch(error) {
        res.send(error);
    }
})

const jsonToList = require('../util')

service.post('/pessoa/cadastrar', async (req, res, next) => {
    let umaPessoa = [jsonToList(req.body)];
    try{
        res.send(await db.pessoa().save(umaPessoa));
    } catch (error) {
        res.send(error);
    }
})

service.del('/pessoa/deletar', async function(req, res, next) {
    const {id} = req.body;
    
    console.log("Dentro do servico de delete: " + req);
    try {
        res.send(await db.pessoa().delete(id));
    } catch (error) {
        res.send(error);
    }
})

module.exports = service;