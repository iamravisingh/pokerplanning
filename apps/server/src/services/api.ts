import express, { Express } from "express";
import cors from "cors";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const cors = require("cors");
import http from "http";
import roomRoutes from './routes/room';
import socketHandler from "./controllers/socketController";

const app: Express = express();
const server = http.createServer(app);


// Enable CORS middleware
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

//app endpoints 
app.use('/api', roomRoutes);

const io = socketHandler(server);

export { app, server, io };