import { createAction } from '@reduxjs/toolkit';
import appSlice from 'store/app/appSlice';

export const appLoadRequest = createAction<void>('app/appLoadRequest');
export const { appLoadSuccess, appLoadError, setAppCount } = appSlice.actions;
