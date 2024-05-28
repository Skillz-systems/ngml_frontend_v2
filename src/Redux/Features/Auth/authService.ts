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

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/users/api/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (credentials) => ({
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