

import { combineReducers } from '@reduxjs/toolkit';
import { api } from './api';
import authSlice from './Features/Auth/authSlice';
import userReducer from './userSlice'
import dropElementsReducer from '../slices/dropElementSlice'; 


import processFlowSlice from './Features/ProcessFlow/processFlowSlice';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authSlice,
    elements: dropElementsReducer,
    processFlow: processFlowSlice,
    [api.reducerPath]: api.reducer,

});

export default rootReducer;