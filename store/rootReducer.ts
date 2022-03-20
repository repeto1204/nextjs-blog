// import { combineReducers, AnyAction} from '@reduxjs/toolkit';
// import appState from './app/appReducer';
// import { HYDRATE } from 'next-redux-wrapper';
//
// export const reducers = combineReducers({
//   appState
// });
//
// export type RootState = ReturnType<typeof reducers>;
//
// const rootReducer = (state: RootState, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       return { ...state, ...action.payload };
//     default: {
//       // TODO 정확한 타입 찾기
//       return reducers(state, action);
//     }
//   }
// };
//
// export default rootReducer;
import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import appSlice from 'store/app/appSlice';
import { HYDRATE } from 'next-redux-wrapper';

const reducers = combineReducers({
  appState: appSlice.reducer
});

export type RootState = ReturnType<typeof reducers>;

const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      return reducers(state, action);
    }
  }
};

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
