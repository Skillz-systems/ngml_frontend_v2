

import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import authSlice from './Features/Auth/authSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;