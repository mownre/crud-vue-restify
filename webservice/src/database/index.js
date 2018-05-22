const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
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