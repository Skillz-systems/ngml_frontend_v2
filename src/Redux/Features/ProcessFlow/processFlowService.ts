
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';



type ErrorResponse = {
  error: string;
};


export interface ProcessFlow {
  id: number | null;
  name: string;
  start_step_id: number | null;
  frequency: string;
  status: boolean;
  frequency_for: string;
  day: null;
  week: null;
  steps: ProcessFlowStep[];
}

export interface ProcessFlowStep {
  id: number;
  name: string;
  step_route: string;
  assignee_user_route: string;
  next_user_designation: string;
  next_user_department: string;
  next_user_unit: string;
  process_flow_id: null;
  next_user_location: null;
  step_type: string;
  user_type: string;
  next_step_id: number | null;
  status: boolean;
}


export interface ProcessFlowApiResponse {
  data: ProcessFlow;
  status?: string;
}


export const processFlowApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProcessFlows: builder.query<ProcessFlowApiResponse, void>({
      query: () => '/processflow/api/forms',
      providesTags: ['Forms'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    submitProcessFlow: builder.mutation<ProcessFlow, ProcessFlow>({
      query: (customer) => ({
        url: '/processflow/api/processflows',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: customer,
      }),
      invalidatesTags: ['Forms', 'Customers', 'Tasks'],
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
  }),
  overrideExisting: false,
});
export const {
  useSubmitProcessFlowMutation,
  useGetProcessFlowsQuery
} = processFlowApi;
