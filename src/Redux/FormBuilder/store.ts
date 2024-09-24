import { configureStore } from '@reduxjs/toolkit';
import dropElementsReducer from './dropElementSlice';

const store = configureStore({
  reducer: {
    elements: dropElementsReducer,
  },
});

export default store;
