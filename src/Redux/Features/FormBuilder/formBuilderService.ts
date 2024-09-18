
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';



type ErrorResponse = {
  error: string;
};


export interface FormField {
  id: number;
  name?: string;
  text?: string;
  elementType: 'number' | 'text' | 'password' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio';
  placeholder?: string;
  key?: string;
}

export interface FormBuilderData {
  id: number;
  name: string;
  json_form: string; 
  process_flow_id?: string;
  process_flow_step_id?: string;
  tag_id?: string;
  form_data: string[]; 
}

export interface FormBuilderApiResponse {
  data: FormBuilderData;
  status?: string;
}



export interface FormFieldAnswer {
  field_id: number;
  answer: string;
}

export interface FormSubmission {
  form_builder_id?: number;
  form_field_answers: string;
  data_id?: number;
}



export interface FormFieldAnswerTwo {
  id: number;
  form_builder_id: string;
  form_field_answers: string | null;
  automator_task_id: string;
  process_flow_history_id: string | null;
  entity: string;
  entity_id: string;
  entity_site_id: string | null;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface FormBuilderDataTwo {
  id: number;
  name: string;
  json_form: string;
  process_flow_id: string | null;
  process_flow_step_id: string | null;
  tag_id: string;
  form_data: FormFieldAnswerTwo[];
}

interface Task {
  id: number;
  form_builder_id: string;
  form_field_answers: string | null;
  automator_task_id: string;
  process_flow_history_id: string | null;
  entity: string;
  entity_id: string;
  entity_site_id: string | null;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponseTwo {
  data: FormBuilderDataTwo;
  status: string;
  task?: Task;
}


export const CREATE_NEW_CUSTOMER_FORM_ID = 6;
export const CREATE_NEW_CUSTOMER_SITE_FORM_ID=5;


export const formBuilderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getForms: builder.query<FormBuilderApiResponse, void>({
      query: () => '/formbuilder/api/forms',
      providesTags: ['Forms'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    getFormById: builder.query<FormBuilderApiResponse, number>({
      query: (id) => `/formbuilder/api/forms/${id}`,
      providesTags: ['Forms'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
     getFormByEntityId: builder.query<ApiResponseTwo, string>({
      query: (url) => `/formbuilder/api/forms/view/${url}`,
       providesTags: ['Forms'],
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
     submitForm: builder.mutation<FormSubmission,FormSubmission>({
      query: (customer) => ({
        url: '/formbuilder/api/form-data/create',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: customer,
      }),
     invalidatesTags: ['Forms', 'Customers', 'Tasks'],
      transformResponse: (response: FormSubmission | ErrorResponse) => {
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
  useGetFormByEntityIdQuery,
  useGetFormsQuery,
  useGetFormByIdQuery,
  useSubmitFormMutation
} = formBuilderApi;
