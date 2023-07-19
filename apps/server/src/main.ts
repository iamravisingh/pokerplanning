import express from "express";
// import cors from "cors";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");
import http from "http";
import socketHandler from "./socketHandler";

const app = express();
const server = http.createServer(app);

// Set up server port
const port = process.env.PORT || 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Enable CORS middleware
app.use(cors());

//setup socket connection
socketHandler(server);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
