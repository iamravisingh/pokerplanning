import { Server, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';
import { rooms } from './roomInMemDb';

// Exports a function that sets up Socket.IO connections
const socketSetup = (server: HttpServer): Server => {
  const io = new Server(server);

  //This resolve the cors issue.
  io.engine.on('headers', (headers) => {
    headers['Access-Control-Allow-Origin'] = '*'; //url to all
  });

  io.on('connection', (socket: Socket) => {
    console.log('User connection established, Yay🫡');
    socket.on('join', (roomKey, username) => {
      const room = rooms.get(roomKey);
      console.log('used joined >>>>>>', roomKey, username, room);
      if (room) {
        room.users.push(username);
        socket.data.username = username;
        socket.join(roomKey);
        io.to(roomKey).emit(
          'joined',
          // Every time we will send entire room data
          // and change happened , TODO we will decide here
          {
            room,
            username,
          }
        );
        rooms.set(roomKey, room);
      } else {
        socket.emit('roomNotFound', { message: 'Room not found' });
      }
    });
    socket.on('cardSelection', (roomKey, username, cardSelected) => {
      console.log('inside cardSelection', roomKey, username, cardSelected);
      const room = rooms.get(roomKey);
      if (room) {
        // Write Logic to make Card Selection
        // Update Room Details
        io.to(roomKey).emit(
          'cardSelected',
          // Every time we will send entire room data
          // and change happened , TODO we will decide here
          {
            room,
            username,
            cardSelected,
          }
        );
      } else {
        socket.emit('roomNotFound', { message: 'Room not found' });
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected ☹️');
      // Remove the user from all rooms when they disconnect
      const roomsToRemoveUserFrom = [];
      // TODO -  we could do it with reduce in one go but Map doesn't support reduce upfront
      rooms.forEach((roomData, roomKey) => {
        if (roomData.users.includes(socket.data.username)) {
          roomData.users = roomData.users.filter(
            (user) => user !== socket.data.username
          );
          roomsToRemoveUserFrom.push(roomKey);
        }
      });
      // Emit an event to inform other users in the rooms
      console.log(
        'removing users roomsToRemoveUserFrom >>>>>>',
        roomsToRemoveUserFrom
      );
      roomsToRemoveUserFrom.forEach((roomKey) => {
        io.to(roomKey).emit('userLeft', {
          username: socket.data.username,
          roomKey,
        });
      });
    });
  });
  return io;
};

export default socketSetup;
