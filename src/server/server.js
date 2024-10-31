import express from 'express'
const server = express();
server.use(express.json());

// Index hosting
server.use(express.static('public'));

// Routers
import hello from './routes/hello.js';
server.use('/api/hello', hello);

export default server;