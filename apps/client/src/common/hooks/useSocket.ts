import { io, Socket } from 'socket.io-client';
import { SERVER_URL } from '../../config';

export type SocketInstanceType = Socket | null;

export const useSocketConnection = () => {
    const socket = io(SERVER_URL, { autoConnect: false });

    const handleConnect = () => {
      console.log('Connected to server >>>>>');
    };

    const handleDisconnect = () => {
      console.log('Disconnected from server >>>>>');
    };

    socket.on('connect', () => handleConnect);

    socket.on('disconnect', handleDisconnect);

  return socket ;
};
