import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateInterface, AppCounterInterface } from './appInterface';
// Define the initial state using that type
const initialState: AppStateInterface = {
  load: false,
  error: false,
  startCount: 0,
  endCount: 0
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appLoadSuccess: (state) => {
      state.load = true;
    },
    appLoadError: (state) => {
      state.load = false;
      state.error = true;
    },
    setAppCount: (state: AppStateInterface, { payload }: PayloadAction<AppCounterInterface>) => {
      state.startCount = payload.startCount;
      state.endCount = payload.endCount;
    }
  }
});

export default appSlice;
