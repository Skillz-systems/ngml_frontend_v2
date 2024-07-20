
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

type LoginRequest = {
  email: string;
  password: string;
  scope:string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  jwt: string;
  user: {
    id: string;
    email: string;
    name: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string | null;
    role?: string;
  };
};
type ErrorResponse = {
  error: string;
};

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials: LoginRequest) => ({
        url: '/users/api/login',
        method: 'POST',
        body: credentials,
      }),

      transformResponse: (response: AuthResponse | ErrorResponse) => {
        console.log(response);
        if ('error' in response) {
          throw new Error(response.error);
        }
        return response;
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse =
          baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (credentials: RegisterRequest) => ({
        url: '/users/api/register',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: {
        jwt: string;
        user: AuthResponse['user'];
      }) => response,
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/users/api/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  authApi;
