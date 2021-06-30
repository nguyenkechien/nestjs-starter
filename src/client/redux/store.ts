import { reducer } from './reducers';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import { config } from '../app/config';
import { enableES5 } from 'immer';
if (!config.__DEV__) enableES5();

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper(() => store, { debug: config.__DEV__ });
