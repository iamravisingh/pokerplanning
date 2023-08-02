import { Request, Response } from 'express';

export const createRoom = (req: Request, res: Response) => {
    const { roomName, userName } = req.body;
    if(!roomName){
        return res.status(404).json({status: 404, message: "room name is required"})
    }
    if(!userName){
        return res.status(404).json({status: 404, message:"user name is required"})
    }
    return res.status(200).json({ status: 200, roomName, userToken: userName })
};

export const getRoomByKey = (req: Request, res: Response) => {
  // Handle get room by ID logic
  const { roomKey } = req.query;
  if(!roomKey){
    return res.status(404).json("room key is required");
  }
  //find the room with room key 
};