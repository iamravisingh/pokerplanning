/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../store/hooks';
import { useSocket, useQueryParams } from '../../common/hooks';
import { setPlanningStart } from '../../store/reducers/planningSlice';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import Box from '@mui/material/Box';
import { CardPlayground } from './components';
import './style.scss';

export const RoomPlayground = () => {
  const dispatch = useAppDispatch();
  const { roomKey, userName } = useQueryParams();
  const { socket, connected } = useSocket(true);
  useEffect(() => {
    dispatch(setPlanningStart(true));
    return () => {
      dispatch(setPlanningStart(false));
      socket.disconnect();
    };
  }, []);

  //check if socket is connected then emit join event
  console.log(
    'isSocketConnected before 2nd useEffect >>>>>>>>>.',
    socket,
    socket.connected,
    connected
  );
  useEffect(() => {
    if (connected) {
      socket.emit('join', roomKey, userName, (data: any) => {
        console.log('inside emit join data >>>>>>', data);
      });
    }
  }, [connected]);

  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <Box>
        <CardPlayground
          socket={socket}
          roomKey={roomKey as string}
          currentUser={userName || ""}
          socketConnected={connected}
        />
      </Box>
    </motion.div>
  );
};
