import express, { Router } from 'express';
import { createRoom } from '../controllers/roomController';

const router: Router = express.Router();

// Define your route handlers
router.post('/', createRoom);
// router.get('/:id', getRoomById);

export default router;
