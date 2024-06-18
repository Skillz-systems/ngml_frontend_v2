import { Middleware } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserRole } from '../../../type';

const createRoleMiddleware = (role: UserRole): Middleware<unknown, RootState> => {
  return storeAPI => next => action => {
    const state = storeAPI.getState();
    
    // Checks if state.user exists before accessing it's role
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
