import { Router}  from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import AppointmentController from './app/controller/AppointmentController';
//Upload de arquivos

import FileController from './app/controller/FileController';
import authMiddleware from './app/middlewares/auth';


const routes = new Router();
const upload = multer(multerConfig)

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); //É chamado em todas as rotas abaixo  //Todos abaixo precisam de token

routes.get('/qualquercoisa', UserController.index);
routes.put('/user', UserController.update);

routes.post('/appointment', AppointmentController.store);

routes.post('/files',upload.single('file'),FileController.store) //rota,s ervice e controller

export default routes;



//Realizar a requisição e resposta
//routes.get('/', (req, res) => {
  //  res.json({message: "Aplicação inicial [1] ==> Hello Word!"})
//})