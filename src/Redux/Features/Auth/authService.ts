import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';



type LoginRequest ={
  email: string;
  password: string;
}

type RegisterRequest= {
  name: string;
  email: string;
  password: string;
}

type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
type ErrorResponse = {
  error: string;
};


export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials:LoginRequest) => ({
        url: '/users/api/login',
        method: 'POST',
        body: credentials,
      }),

      transformResponse: (response: AuthResponse | ErrorResponse) => {
        if ('error' in response) {
          throw new Error(response.error);
        }
        return response;
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (credentials:RegisterRequest) => ({
        url: '/users/api/register',
        method: 'POST',
        body: credentials,
      }),
       transformResponse: (response: { token: string; user: AuthResponse['user'] }) => response,
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