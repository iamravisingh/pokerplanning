/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setPlanningStart,
  isPlanningStarted,
} from '../../store/reducers/planningSlice';
import { useSocketConnection } from '../../common/hooks';
import Box from '@mui/material/Box';
import { CardDesk } from './components';
import './style.scss';

export const RoomPlayground = () => {
  const dispatch = useAppDispatch();
  const checkPlanningStarted = useAppSelector(isPlanningStarted);
  const { socketInstance } = useSocketConnection();
  const location = useLocation();
  const roomKey = new URLSearchParams(location.search).get('roomKey');

  useEffect(() => {
    if (!checkPlanningStarted && roomKey) {
      socketInstance?.connect();
      dispatch(setPlanningStart(true));
    }
    return () => {
      dispatch(setPlanningStart(false));
    };
  }, []);

  return (
    <Box>
      <CardDesk />
    </Box>
  );
};
