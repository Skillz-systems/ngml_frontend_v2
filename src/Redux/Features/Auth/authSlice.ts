import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface AuthState {
  jwt: string | null;
  user: {
    id: string;
    email: string;
    name: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string | null;
  } | null;
}

const initialState: AuthState = {
  jwt: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ jwt: string; user: AuthState['user'] }>
    ) => {
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.jwt = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.jwt;

export default authSlice.reducer;