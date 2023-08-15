import { combineReducers } from "@reduxjs/toolkit";
import planningReducers from "./reducers/planningSlice";

export default combineReducers({
    planning: planningReducers
})