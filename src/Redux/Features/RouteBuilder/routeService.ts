
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

export interface Route {
  id?: number;
  name: string;
  link: string;
  dynamic_content?:string;
  status?: number;
}

export interface RoutesData {
  data: Route[];
}

export interface RouteSingleData {
  data: Route;
}

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const routeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesData, void>({
      query: () => '/processflow/api/route',
      providesTags: ['Routes'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),

    createRoute: builder.mutation<RouteSingleData, Route>({
      query: (processflow) => ({
        url: '/processflow/api/route/create',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: processflow,
      }),
      invalidatesTags: ['Routes'],
      transformResponse: (response: RouteSingleData | ErrorResponse) => {
        if ('message' in response) {
          throw new Error(response.message);
        }
        return response;
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),

    deleteRoute: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/processflow/api/route/delete/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ['Routes'],
      transformResponse: (response: { success: boolean; id: number } | ErrorResponse) => {
        if ('message' in response) {
          throw new Error(response.message);
        }

        if ('success' in response && 'id' in response) {
          return response;
        }
        throw new Error('Invalid response format');
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateRouteMutation, 
  useGetRoutesQuery, 
  useDeleteRouteMutation,
} = routeApi;
