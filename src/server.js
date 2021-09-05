
import app from './app';
//import  dotenv from 'dotenv/config';

//const app = require('./app');

const PORT =process.env.PORT || 3000; //Variável de ambiente
app.listen(PORT);

console.log(`This server started in port ${process.env.PORT}`)