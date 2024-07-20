// import { BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import {
//   BaseQueryApi,
//   createApi,
//   FetchArgs,
//   fetchBaseQuery,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query/react';
// import { toast } from 'react-toastify';
// import type { RootState } from './store';

// const baseQuery = fetchBaseQuery({
//   baseUrl: '/api',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.jwt;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//       document.cookie = `jwt=${token}; path=/; SameSite=Strict; Secure`;
//       // document.cookie = `jwt=${token}; path=/;`;
//       // document.cookie = `jwt=${token};`;
//     //  headers.set('Cookie', `jwt=${token}`);
//     }
//     return headers;
//   },
//   credentials: 'include',
// });

// const baseQueryWithReauth = async (
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: BaseQueryExtraOptions<typeof baseQuery>,
// ) => {
//   try {
//     const result = await baseQuery(args, api, extraOptions);
    
//     if (result.error) {
//       const error = result.error as FetchBaseQueryError;
//       console.log('API Error:', error); // Add this line for debugging
      
//       switch (error.status) {
//         case 401:
//           toast.error('Unauthorized: Please login again.');
//           // api.dispatch(logout());
//           console.log('api 401', error.status);
//           // window.location.href = '/';
//           break;
//         case 403:
//           toast.error('Forbidden: Access is denied.');
//           window.location.href = '/unauthorized';
//           break;
//         case 404:
//           toast.error('Resource not found.');
//           break;
//         case 500:
//           toast.error('Server error occurred.');
//           break;
//         default:
//           toast.error(
//             `An error occurred: ${error.status ? error.status : 'Unknown error'}`,
//           );
//       }
//     }

//     return result;
//   } catch (error) {
//     console.error('Unexpected error in baseQueryWithReauth:', error);
//     toast.error('An unexpected error occurred. Please try again later.');
//     return { error: { status: 'CUSTOM_ERROR', error: 'Unexpected error occurred' } };
//   }
// };

// export const api = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: () => ({}),
//   tagTypes: ['Customers', 'Suppliers', 'EOI', 'Tasks'],
// });


import { BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { getBaseUrl } from '../Utils/apiConfig';
import type { RootState } from './store';

const baseQuery = fetchBaseQuery({
  baseUrl: getBaseUrl(),
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.jwt;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      document.cookie = `jwt=${token}; path=/;`;
      // document.cookie = `jwt=${token};`;
    //  headers.set('Cookie', `jwt=${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<typeof baseQuery>,
) => {
  try {
    const result = await baseQuery(args, api, extraOptions);
    
    if (result.error) {
      const error = result.error as FetchBaseQueryError;
      console.log('API Error:', error); // Add this line for debugging
      
      switch (error.status) {
        case 401:
          toast.error('Unauthorized: Please login again.');
          // api.dispatch(logout());
          console.log('api 401', error.status);
          // window.location.href = '/';
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
            `An error occurred: ${error.status ? error.status : 'Unknown error'}`,
          );
      }
    }

    return result;
  } catch (error) {
    console.error('Unexpected error in baseQueryWithReauth:', error);
    toast.error('An unexpected error occurred. Please try again later.');
    return { error: { status: 'CUSTOM_ERROR', error: 'Unexpected error occurred' } };
  }
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Customers', 'Suppliers', 'EOI', 'Tasks'],
});
