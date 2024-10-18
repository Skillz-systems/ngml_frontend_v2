/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';


const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.ngml.skillzserver.com',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.access_token;
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }

      console.log(token)


     headers.set('authorization', 'Bearer 19|ENEsiIwt9K9AmPM6xLtvfdZ2OLIHWO19RQmvPyAs3089de3b');
    return headers;
  },
});


// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://api.ngml.skillzserver.com',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as any).auth.access_token;
//     // console.log(token)
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }

//     //  headers.set('authorization', 'Bearer 19|ENEsiIwt9K9AmPM6xLtvfdZ2OLIHWO19RQmvPyAs3089de3b');
//     return headers;
//   },
// });

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
          // toast.error('Resource not found.');
          break;
        case 500:
          // toast.error('Server error occurred.');
          break;
        default:

          // toast.error(
          //   `An error occurred: ${error.status ? error.status : 'Unknown error'}`,
          // );
      }
    }

    return result;
  } catch (error) {
    console.error('Unexpected error in baseQueryWithReauth:', error);
    // toast.error('An unexpected error occurred. Please try again later.');
    return { error: { status: 'CUSTOM_ERROR', error: 'Unexpected error occurred' } };
  }
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  endpoints: () => ({}),
  tagTypes: ['Customers', 'Suppliers', 'EOI', 'Tasks', 'Forms','ProcessFlow','FormBuilder','Routes','Users','AssignTasks','HeadsOfUnit' , 'UsersSettings','Units', 'Designations', 'Departments','Locations', 'Staff','SSO_init', 'SSO_callback', 'Tags', 'DynamicContent', 'InvoiceAdvice' ],
});

