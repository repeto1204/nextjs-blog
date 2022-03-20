import { AnyAction, configureStore, Middleware, MiddlewareArray } from '@reduxjs/toolkit';
import rootReducer, { RootReducer } from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import rootSaga from './rootSaga';

const isDev = process.env.NODE_ENV === 'development';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = isDev ? [sagaMiddleware, logger] : [sagaMiddleware];
  const store = configureStore<RootReducer, AnyAction, MiddlewareArray<Middleware>>({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([...middlewares]),
    devTools: isDev
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, { debug: isDev });
export default wrapper;
