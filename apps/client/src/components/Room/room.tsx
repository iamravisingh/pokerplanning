/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { useAppDispatch } from '../../store/hooks';
import { setPlanningStart } from "../../store/reducers/planningSlice"

export const RoomPlayground = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const roomKey = new URLSearchParams(location.search).get('roomKey');

    useEffect(() => {
        return () => {
            dispatch(setPlanningStart(false));
        }
    },[]);
    console.log("inside RoomPlayground >>>>>>>>>", roomKey)
    return (
        <div>
            playground
        </div>
    )
}