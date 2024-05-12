import { useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '../../config';

export type SocketInstanceType = Socket | null;

export const useSocket = (enableAutoConnect = false) => {
  const [connected, setConnected] = useState(false);
  const socket = io(SERVER_URL, { autoConnect: enableAutoConnect });

  const handleConnect = () => {
    console.log('Connected to server >>>>>');
    setConnected(true);
  };

  const handleDisconnect = () => {
    console.log('Disconnected from server >>>>>');
    setConnected(false);
  };

  socket.on('connect', () => handleConnect());

  socket.on('disconnect', () => handleDisconnect());

  return { socket, connected };
};
