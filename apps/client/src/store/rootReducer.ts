import { combineReducers } from "@reduxjs/toolkit";
import planningReducers from "./reducers/planningSlice";
import roomSlice from "./reducers/roomSlice";

export default combineReducers({
    planning: planningReducers,
    rooms: roomSlice
})