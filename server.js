const express = require('express');

const accountsRouter = require('./accounts/accounts-router.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB Helpers with Knex challenge</h3>')
})

module.exports = server;