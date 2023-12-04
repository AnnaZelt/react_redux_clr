import { configureStore } from '@reduxjs/toolkit';
import cColorReducer from '../features/counter/cColorSlice';

export const store = configureStore({
  reducer: {
    cColorSlice:cColorReducer
  },
});
