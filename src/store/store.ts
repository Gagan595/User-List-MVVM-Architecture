// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/GlobalSlice';
import userReducer from './slices/UserSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer, 
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch