import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

import server from "../../src/server/server.js";
api.use("/api", server);

export const handler = serverless(api);