import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../features/packages/packagesSlice';

export const store = configureStore({
  reducer: {
    packages: packageReducer,
  },
});
