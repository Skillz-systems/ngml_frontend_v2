import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserRole } from '../../../type';

const createRoleMiddleware = (role: UserRole): Middleware<unknown, RootState> => {
  return storeAPI => next => action => {
    const state = storeAPI.getState();
    
    // Check if state.user exists before accessing its role
    if (state && state.user && state.user.role === role) {
      console.log(`Action for ${role}:`, action);
    }
    return next(action);
  };
};

export const adminMiddleware = createRoleMiddleware('admin');
export const staffMiddleware = createRoleMiddleware('staff');
export const customerMiddleware = createRoleMiddleware('customer');
export const supplierMiddleware = createRoleMiddleware('supplier');
