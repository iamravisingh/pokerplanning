/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useSocketConnection } from '../../common/hooks';
import {
  setPlanningStart,
  isPlanningStarted,
} from '../../store/reducers/planningSlice';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import Box from '@mui/material/Box';
import { CardDesk } from './components';
import './style.scss';

export const RoomPlayground = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const roomKey = new URLSearchParams(location.search).get('roomKey') || '';
  const checkPlanningStarted = useAppSelector(isPlanningStarted);
  const socket = useSocketConnection();
  console.log('socketInstance >>>>>>>>', checkPlanningStarted);

  useEffect(() => {
    socket.connect();
    dispatch(setPlanningStart(true));
    return () => {
      dispatch(setPlanningStart(false));
      socket.disconnect();
    };
  }, []);

  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <Box>
        <CardDesk socket={socket} roomKey={roomKey} />
      </Box>
    </motion.div>
  );
};
