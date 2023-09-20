import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type RoomState = {
  roomDetails: {
    [key: string]: {
      roomName: string;
      roomKey: string;
      users: Array<string>;
    };
  };
};
const initialState: RoomState = {
  roomDetails: {},
};

const slice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action) => {
      return {
        ...state,
        roomDetails: action.payload,
      };
    },
  },
});

export const getRoomsFromStore = (state: RootState) => {
  return state.rooms.roomDetails;
};

export const { setRooms } = slice.actions;

export default slice.reducer;
