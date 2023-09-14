import { Request, Response } from 'express';
import { io } from "../api"
import { nanoid } from 'nanoid';
import { rooms } from './roomInMemDb';

//Variable to store the room details as a memory storage, 
//we need to remove this once we finalize storage approach

export const createRoom = (req: Request, res: Response) => {
  // TODO make DTO interfaces for req and res
  const {roomName, userName}:{ roomName: string, userName: string } = req.body;
  //nanoid is used to generate a unique key
  const roomKey = nanoid() as string;
  const newRoomDetails = {
    roomKey,
    roomName,
    users: [userName],
  };
  if (!roomName) {
    return res
    .status(422)
    .json({ status: 422, message: 'room name is required' });
  }
  if (!userName) {
    return res
    .status(422)
    .json({ status: 422, message: 'user name is required' });
  }
  io.emit(roomName, newRoomDetails)
  //if roomName and userName is provided, proceed to create a new room
  //TODO: for now were are storing the room details in roomDetails variable and will be used till the connection is terminated.
  // we need to replace this with some proper solution like redis/mongodb
  rooms.set(roomKey, { ...newRoomDetails });
  return res.json({ status: 200, ...newRoomDetails });
};

export const getRoomByKey = (req: Request, res: Response) => {
  const { roomKey } = req.query;
  if (!roomKey) {
    return res.json('room key is required');
  }
  //find the room with room key and return the room object
  //if no room found with passed key then return not found error 
  const roomDetails = rooms.get(roomKey as string);
  if(!roomDetails) {
    return res.json({ status: 422, message: "Invalid room key" });
  }
  return res.json({ status: 200, roomDetails})
};

export const getRoomsDetails = (req: Request, res: Response) => {
  //fromEntries is used to convert Map object to basic object structure
  const details = Object.fromEntries(rooms);
  return res.json({ status: 200, roomsDetails: details })
}