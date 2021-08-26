//const {Router}= require('express');
import { Router}  from 'express';
import UserController from './app/controller/UserController';

const routes = new Router();

routes.post('/user', UserController.store);

export default routes;




//Realizar a requisição e resposta
//routes.get('/', (req, res) => {
  //  res.json({message: "Aplicação inicial [1] ==> Hello Word!"})
//})