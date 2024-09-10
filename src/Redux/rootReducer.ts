

import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import authSlice from './Features/Auth/authSlice';
import processFlowSlice from './Features/ProcessFlow/processFlowSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authSlice,
    processFlow: processFlowSlice,
    [api.reducerPath]: api.reducer,
});

export default rootReducer;