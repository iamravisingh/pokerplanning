import { Request, Response } from 'express';
import { io } from "../api"
import { nanoid } from 'nanoid';

//Variable to store the room details as a memory storage, 
//we need to remove this once we finalize storage approach
const roomsDetails = new Map();

export const createRoom = (req: Request, res: Response) => {
  const { roomName, userName } = req.body;
  //nanoid is used to generate a unique key
  const roomKey = nanoid();
  const newRoomDetails = {
    roomKey,
    roomName,
    userName,
  };
  if (!roomName) {
    return res
    .status(404)
    .json({ status: 404, message: 'room name is required' });
  }
  if (!userName) {
    return res
    .status(404)
    .json({ status: 404, message: 'user name is required' });
  }
  io.emit("createRoom", newRoomDetails)
  //if roomName and userName is provided, proceed to create a new room
  //TODO: for now were are storing the room details in roomDetails variable and will be used till the connection is terminated.
  // we need to replace this with some proper solution like redis/mongodb
  roomsDetails.set(roomKey, { ...newRoomDetails });
  return res.json({ status: 200, ...newRoomDetails });
};

export const getRoomByKey = (req: Request, res: Response) => {
  const { roomKey } = req.query;
  if (!roomKey) {
    return res.json('room key is required');
  }
  //find the room with room key and return the room object
  //if no room found with passed key then return not found error 
  const roomDetails = roomsDetails.get(roomKey);
  if(!roomDetails) {
    return res.json({ status: 404, message: "Room not found" });
  }
  return res.json({ status: 200, roomDetails})
};

export const getRoomsDetails = (req: Request, res: Response) => {
  //fromEntries is used to convert Map object to basic object structure
  const details = Object.fromEntries(roomsDetails);
  return res.json({ status: 200, roomsDetails: details })
}