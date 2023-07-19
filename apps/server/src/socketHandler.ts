import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

// Export a function that sets up Socket.IO connections
const socketSetup = (server: HttpServer): void => {
  const io = new Server(server);

  //This resolve the cors issue.
  io.engine.on("headers", (headers) => {
    headers["Access-Control-Allow-Origin"] = "*"; // url to all
  });

  io.on("connection", (socket: Socket) => {
    console.log("A user connected");

    socket.on("cardSelection", (data) => {
      console.log("Card selected >>>>>>>", data);
      io.emit("cardSelection", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

export default socketSetup;
