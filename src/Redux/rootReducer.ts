

import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import authSlice from './Features/Auth/authSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;