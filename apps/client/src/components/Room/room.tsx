/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setPlanningStart, isPlanningStarted } from "../../store/reducers/planningSlice";
import Box from '@mui/material/Box';
import { CardDesk } from "./components";
import "./style.scss";

export const RoomPlayground = () => {
    const dispatch = useAppDispatch();
    const checkPlanningStarted = useAppSelector(isPlanningStarted)
    const location = useLocation();
    const roomKey = new URLSearchParams(location.search).get('roomKey');

    useEffect(() => {
        if(!checkPlanningStarted && roomKey){
            dispatch(setPlanningStart(true));
        }
        return () => {
            dispatch(setPlanningStart(false));
        }
    },[]);

    return (
        <Box>
            <CardDesk/>
        </Box>
    )
}