/* eslint-disable @typescript-eslint/no-explicit-any */

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ngml.skillzserver.com' }),
//   endpoints: () => ({}),
// })

import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { logout } from './Features/Auth/authSlice'; // Import your logout action
import type { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.ngml.skillzserver.com',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.jwt;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error as FetchBaseQueryError;
    switch (error.status) {
      case 401:
        toast.error('Unauthorized: Please login again.');
        api.dispatch(logout());
        window.location.href = '/';
        break;
      case 403:
        toast.error('Forbidden: Access is denied.');
        window.location.href = '/unauthorized';
        break;
      case 404:
        toast.error('Resource not found.');
        break;
      case 500:
        toast.error('Server error occurred.');
        break;
      default:
        toast.error(
          `An error occurred: ${error || 'Unknown error'}`,
        );
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Customers', 'Suppliers', 'EOI'],
});
