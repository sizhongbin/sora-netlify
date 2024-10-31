import express from 'express'
const server = express();
server.use(express.json());

// Routers
import hello from './routes/hello.js';
server.use('/hello', hello);

export default server;