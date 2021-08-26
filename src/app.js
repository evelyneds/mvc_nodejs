//const express = require('express');
//const routes = require = require('./routes')
import express from 'express';
import routes from './routes';

import './database'


class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    //Recebe um valor e passa p a prox função ou carrega um parametro no escopo do proj
    middleware() {
        this.server.use(express.json()); //As rotas serão informadas em Json no escopo global
    }

    routes() {
        this.server.use(routes);
    }
}

//module.exports=new App().server;
export default new App().server;
