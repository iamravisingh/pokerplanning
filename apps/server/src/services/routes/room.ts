import express, { Router } from 'express';
import { createRoom, getRoomByKey, getRoomsDetails } from '../controllers/roomController';

const router: Router = express.Router();

router.post('/room/', createRoom); //create new room 
router.get('/room/', getRoomByKey); // get room by key
router.get('/rooms', getRoomsDetails) // get all rooms details 

export default router;
