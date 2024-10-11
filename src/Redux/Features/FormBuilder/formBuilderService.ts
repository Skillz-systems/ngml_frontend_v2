/* eslint-disable @typescript-eslint/no-explicit-any */


import { api } from '../../api';




interface Option {
    label: string;
    value: string;
}

export interface FormField {
  id: number;
  name?: string;
  label?: string;
  type: 'number' | 'text' | 'password' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'location' | 'email' | 'tel' | 'hidden' | 'file';
  placeholder?: string;
  options?: Option[];
  required?: boolean;
  value?: string;
}

export interface FormBuilderData {
  id?: number;
  name?: string;
  json_form: string;
  process_flow_id: string | number | undefined;
  process_flow_step_id: string | number | undefined;
  tag_id?: string;
  form_data: string[] | [];
  description?: string;
}

// export interface FormSubmission {
//   form_builder_id?: string |undefined;
//   form_field_answers: string;
//   data_id?: number;
//   files?: File[]; // Add this line to support file uploads
// }

export interface FormSubmission {
  form_builder_id?: string | undefined;
  form_field_answers: string;
  data_id?: number;
  process_flow_id?: string | number | undefined;
  process_flow_step_id?: string | number | undefined;
  tag_id?: string;
}




// export interface FormField {
//   id: number;
//   name?: string;
//   label?: string;
//   type: 'number' | 'text' | 'password' | 'date' | 'select' | 'textarea' | 'checkbox' | 'radio'|'location'|'email'|'tel'|'hidden'|'file';
//   placeholder?: string;
//   options?:[];
//   required?:boolean;
// }

// export interface FormBuilderData {
//   id?: number;
//   name?: string;
//   json_form: string;
//   process_flow_id: string | number | undefined;
//   process_flow_step_id: string | number | undefined;
//   tag_id?: string;
//   form_data: string[]|[];
//   description?: string;
// }

export interface FormBuilderApiResponse {
  data: FormBuilderData;
  status?: string;
}



export interface FormFieldAnswer {
  field_id: number;
  answer: string;
}

// export interface FormSubmission {
//   form_builder_id?: number;
//   form_field_answers: string;
//   data_id?: number;
// }



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
export const CREATE_NEW_CUSTOMER_SITE_FORM_ID = 5;


export const formBuilderApi = api.injectEndpoints({
  endpoints: (builder) => ({

    createForm: builder.mutation<FormBuilderApiResponse, Partial<FormBuilderData>>({
      query: (formData) => ({
        url: '/formbuilder/api/forms/create',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Forms'],
    
    }),

    getForms: builder.query<FormBuilderApiResponse, void>({
      query: () => '/formbuilder/api/forms',
      providesTags: ['Forms'],
     
    }),
     getTags: builder.query<any, void>({
      query: () => '/formbuilder/api/tag',
      providesTags: ['Tags'],
   
    }),
    getFormById: builder.query<FormBuilderApiResponse, number>({
      query: (id) => `/formbuilder/api/forms/${id}`,
      providesTags: ['Forms'],
     
    }),
    getFormByEntityId: builder.query<ApiResponseTwo, string>({
      query: (url) => `/formbuilder/api/forms/view/${url}`,
      providesTags: ['Forms'],
    
    }),

    submitForm: builder.mutation<FormSubmission, FormSubmission>({
      query: (formData) => ({
        url: '/formbuilder/api/form-data/create',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Forms', 'Customers', 'Tasks'],
    }),

    saveForm: builder.mutation<FormBuilderApiResponse, Partial<FormBuilderData>>({
      query: (formData) => ({
        url: '/formbuilder/api/forms/save',
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Forms'],

    }),

  }),
  overrideExisting: false,
});






export const {
  useGetTagsQuery,
  useCreateFormMutation,
  useGetFormByEntityIdQuery,
  useGetFormsQuery,
  useGetFormByIdQuery,
  useSubmitFormMutation,
  useSaveFormMutation
} = formBuilderApi;






















