import { useEffect } from "react";
import { io } from "socket.io-client";
import { SERVER_URL } from "../../config";

export const SocketConnection = () => {
  useEffect(() => {
    const socket = io(SERVER_URL);

    // Socket.IO event handlers
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.disconnect();
    };
  }, []);

  return <div>Client with Socket.IO Connection</div>;
};
