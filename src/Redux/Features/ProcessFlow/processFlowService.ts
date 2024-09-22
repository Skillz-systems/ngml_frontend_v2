
import { StepType, UserType } from '@/Pages/ProcessFlowGroup/component/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';



type ErrorResponse = {
  error: string;
};


export interface ProcessFlow {
  id: number | null;
  name: string;
  start_step_id?: number | null;
  frequency?: string;
  status?: boolean;
  frequency_for?: string;
  day?: string | null;
  week?: string | null;
  steps?: ProcessFlowStep[];
}
export interface ProcessFlowStep {

    id: number;
    name: string;
    step_route: string;
    assignee_user_route: string;
    next_user_designation: string | null;
    next_user_department: string | null;
    next_user_unit: string | null;
    process_flow_id: string | null;
    next_user_location: string | null;
    step_type: StepType;
    user_type: UserType;
    next_step_id: number | null;
    status: boolean;
}


export interface ProcessFlowApiResponse {
  data: ProcessFlow[];
  status?: string;
}


export const processFlowApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProcessFlows: builder.query<ProcessFlowApiResponse, void>({
      query: () => '/processflow/api/processflows',
      providesTags: ['ProcessFlow'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),

    getProcessFlowById: builder.query<ProcessFlowApiResponse, number>({
      query: (id) => `/processflow/api/processflows/${id}`,
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
      // providesTags: ['Customers'],
    }),
    createProcessFlow: builder.mutation<ProcessFlow, ProcessFlow>({
      query: (processflow) => ({
        url: '/processflow/api/processflows',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: processflow,
      }),
      invalidatesTags: ['ProcessFlow'],
      transformResponse: (response: ProcessFlow | ErrorResponse) => {
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

    updateProcessFlow: builder.mutation<ProcessFlowApiResponse, Partial<ProcessFlow> & { id: number }>({
      query: ({ id, ...updates }) => ({
        url: `/processflow/api/processflows/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: updates,
      }),
      invalidatesTags: ['ProcessFlow'],
      transformResponse: (response: ProcessFlowApiResponse | ErrorResponse) => {
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

    deleteProcessFlow: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `//processflow/api/processflows/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
      invalidatesTags: ['ProcessFlow'],
      transformResponse: (response: { success: boolean; id: number } | ErrorResponse) => {
        if ('error' in response) {
          throw new Error(response.error);
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
  useDeleteProcessFlowMutation,
  useGetProcessFlowByIdQuery,
  useUpdateProcessFlowMutation,
  useCreateProcessFlowMutation,
  useGetProcessFlowsQuery
} = processFlowApi;
