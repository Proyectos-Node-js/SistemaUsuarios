require('./settings/database');

const server    = require('./server/server')
const cors      = require('cors');
const router    = require('./routes/app');
const express   = require('express');

server.setPort;

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}


//Middlewares
server.app.use(cors());
server.app.use(express.json({extended:true})); // Para enviar json desde postman

server.app.use('/api',cors(corsOptions), router);


server.listenPort;

