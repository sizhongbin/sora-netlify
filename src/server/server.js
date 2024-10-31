import express from 'express'
const server = express();
server.use(express.json());

// Routers
import hello from './routes/hello.js';
server.use('/api/hello', hello);

export default server;