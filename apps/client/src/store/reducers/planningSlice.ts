import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type PlanningState = {
  isPlanningStarted: boolean;
};

const initialState: PlanningState = {
  isPlanningStarted: false,
};

const slice = createSlice({
  name: 'planning',
  initialState,
  reducers: {
    setPlanningStart: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isPlanningStarted: action.payload,
      };
    },
  },
});

export const isPlanningStarted = (state: RootState) => {
  return state.planning.isPlanningStarted;
};

export const { setPlanningStart } = slice.actions;

export default slice.reducer;
