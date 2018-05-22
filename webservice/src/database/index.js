const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'aluno',
    password: 'aluno',
    database: 'cadastro'
});

const errorHandler = (error, msg, rejectFunction) => {
    console.error(error);
    rejectFunction({error: msg})
}

const pessoaModule = require('./pessoa')({connection, errorHandler});


module.exports = {
    pessoa: () => pessoaModule
};