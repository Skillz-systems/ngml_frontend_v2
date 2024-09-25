import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

export interface HeadOfUnit {
  id?: number;
  name: string;
  email: string;
  department: string;
  status?: number;
}

export interface HeadsOfUnitData {
  data: HeadOfUnit[];
}

export interface HeadOfUnitSingleData {
  data: HeadOfUnit;
}

type ErrorResponse = {
  success: boolean;
  message: string;
};

export const headOfUnitApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeadsOfUnit: builder.query<HeadsOfUnitData, void>({
      query: () => '/admin/api/heads-of-unit',
      providesTags: ['HeadsOfUnit'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),

    createHeadOfUnit: builder.mutation<HeadOfUnitSingleData, HeadOfUnit>({
      query: (headOfUnit) => ({
        url: '/admin/api/heads-of-unit/create',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: headOfUnit,
      }),
      invalidatesTags: ['HeadsOfUnit'],
      transformResponse: (response: HeadOfUnitSingleData | ErrorResponse) => {
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

    updateHeadOfUnit: builder.mutation<HeadOfUnitSingleData, HeadOfUnit>({
      query: (headOfUnit) => ({
        url: `/admin/api/heads-of-unit/update/${headOfUnit.id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: headOfUnit,
      }),
      invalidatesTags: ['HeadsOfUnit'],
      transformResponse: (response: HeadOfUnitSingleData | ErrorResponse) => {
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

    deleteHeadOfUnit: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/admin/api/heads-of-unit/delete/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ['HeadsOfUnit'],
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
  useCreateHeadOfUnitMutation,
  useGetHeadsOfUnitQuery,
  useUpdateHeadOfUnitMutation,
  useDeleteHeadOfUnitMutation,
} = headOfUnitApi;