import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '../../config';

export type SocketInstance = Socket | null;

export const useSocketConnection = () => {
  const [socketInstance, setSocketInstance] = useState<SocketInstance>(null);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      const socket = io(SERVER_URL, { autoConnect: false });

      // Socket.IO event handlers
      socket.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });
      setSocketInstance(socket);
    }

    return () => {
      ignore = true;
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [socketInstance]);
  return { socketInstance };
};
