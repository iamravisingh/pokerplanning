/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../store/hooks';
import { useSocketConnection, useQueryParams } from '../../common/hooks';
import { setPlanningStart } from '../../store/reducers/planningSlice';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import Box from '@mui/material/Box';
import { CardPlayground } from './components';
import './style.scss';

export const RoomPlayground = () => {
  const dispatch = useAppDispatch();
  const { roomKey } = useQueryParams();
  const socket = useSocketConnection();

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
        <CardPlayground socket={socket} roomKey={roomKey as string} />
      </Box>
    </motion.div>
  );
};
