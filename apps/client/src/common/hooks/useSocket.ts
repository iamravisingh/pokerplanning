import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '../../config';

export type SocketInstanceType = Socket | null;

export const useSocketConnection = () => {
  const [socketInstance, setSocketInstance] =
    useState<SocketInstanceType>(null);

  useEffect(() => {
    const socket = io(SERVER_URL, { autoConnect: false });

    const handleConnect = () => {
      console.log('Connected to server');
    };

    const handleDisconnect = () => {
      console.log('Disconnected from server');
    };
    // Socket.IO event handlers
    socket.on('connect', () => handleConnect);

    socket.on('disconnect', handleDisconnect);
    setSocketInstance(socket);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.disconnect();
    };
  }, []);

  return { socketInstance };
};
