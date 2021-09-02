import { Router}  from 'express';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import AppointmentController from './app/controller/AppointmentController';

import authMiddleware from './app/middlewares/auth';


const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); //É chamado em todas as rotas abaixo  //Todos abaixo precisam de token

routes.get('/qualquercoisa', UserController.index);
routes.put('/user', UserController.update);

routes.post('/appointment', AppointmentController.store)

export default routes;



//Realizar a requisição e resposta
//routes.get('/', (req, res) => {
  //  res.json({message: "Aplicação inicial [1] ==> Hello Word!"})
//})