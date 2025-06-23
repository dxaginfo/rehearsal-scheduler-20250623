import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import rehearsalReducer from './rehearsalSlice';
import groupReducer from './groupSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    rehearsals: rehearsalReducer,
    groups: groupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;