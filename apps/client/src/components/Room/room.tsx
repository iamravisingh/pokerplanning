/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useSocketConnection } from '../../common/hooks';
import {
  setPlanningStart,
  isPlanningStarted,
} from '../../store/reducers/planningSlice';
import Box from '@mui/material/Box';
import { CardDesk } from './components';
// import RoomService from '../../services/room';
import './style.scss';

export const RoomPlayground = () => {
  const dispatch = useAppDispatch();
  const checkPlanningStarted = useAppSelector(isPlanningStarted);
  const socketInstance = useSocketConnection();
  const location = useLocation();
  const roomKey = new URLSearchParams(location.search).get('roomKey') || '';
  console.log('socketInstance >>>>>>>>', checkPlanningStarted, roomKey);

  //   const fetchRoomKeyDetails = async () => {
  //     const roomDetails = await RoomService.getRoomById(roomKey);
  //     console.log('roomDetails >>>>>>>', roomDetails);
  //     return roomDetails;
  //   };

//   const shouldStartPlanning = !checkPlanningStarted && roomKey;

  useEffect(() => {
    socketInstance.connect();
    socketInstance.emit("roomKey", roomKey);
    console.log('socket inside room >>>>>>>', socketInstance);
    dispatch(setPlanningStart(true));

    return () => {
      dispatch(setPlanningStart(false));
      socketInstance.disconnect();
    };
  }, []);

  return (
    <Box>
      <CardDesk />
    </Box>
  );
};
