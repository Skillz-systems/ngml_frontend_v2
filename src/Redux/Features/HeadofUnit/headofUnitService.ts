import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

export interface HeadOfUnit {
  id: number;
  user_id:string,
  location_id:string;
  unit_id:string;
  status:string;
}

export interface HeadsOfUnitData {
  data: HeadOfUnit[];
}

export interface HeadOfUnitSingleData {
  data: HeadOfUnit;
}

export interface HeadOfUnitCreateInterface{
  user_id:string,
  location_id:string;
  unit_id:string;
  status:string;
}
type ErrorResponse = {
  success: boolean;
  message: string;
};

export const headOfUnitApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeadsOfUnit: builder.query<HeadsOfUnitData, void>({
      query: () => '/users/api/v1/headofunit',
      providesTags: ['HeadsOfUnit'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),

    createHeadOfUnit: builder.mutation<HeadOfUnitSingleData, HeadOfUnitCreateInterface>({
      query: (headOfUnit) => ({
        url: '/users/api/v1/headofunit/create',
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

  }),
  overrideExisting: false,
});

export const {
  useCreateHeadOfUnitMutation,
  useGetHeadsOfUnitQuery
} = headOfUnitApi;