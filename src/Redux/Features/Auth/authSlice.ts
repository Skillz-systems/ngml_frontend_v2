/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
    email: string;
    name: string;
    status: string;
    updated_at: string;
    created_at: string;
    id: number;
  
}

export interface RegistrationResponse {
    message?: string|null;
    user: User|null;
    access_token: string|null;
}


// interface AuthState {
//   jwt: string | null;
//   user: {
//     id: string;
//     email: string;
//     name: string;
//     email_verified_at?: string | null;
//     created_at?: string;
//     updated_at?: string | null;
//   } | null;
// }

const initialState: RegistrationResponse = {
  access_token: null,
  user: null,
  // message:null

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access_token: string; user: RegistrationResponse['user'] }>
    ) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.access_token = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectToken = (state: any) => state.auth.access_token;

export default authSlice.reducer;
