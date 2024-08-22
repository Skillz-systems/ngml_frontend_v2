import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

type Customer = {
  id: number;
  task_id: number;
  company_name: string;
  email: string;
  phone_number: string;
  created_by_user_id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  sites: [
    {
      id: number;
      task_id: number;
      site_address: string;
      ngml_zone_id: number;
      site_name: string;
      phone_number: string;
      email: string;
      site_contact_person_name: string;
      site_contact_person_email: string;
      site_contact_person_phone_number: string;
      site_existing_status: boolean;
      status: boolean;
      created_at: string;
      updated_at: string;
    },
  ];
};

type ErrorResponse = {
  error: string;
};

export const customersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => '/customer/api/customers',
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    getCustomerById: builder.query<Customer, number>({
      query: (id) => `/customer/api/customers/${id}`,
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    addCustomer: builder.mutation<Customer, Omit<Customer, 'id'>>({
      query: (customer) => ({
        url: '/customer/api/customers',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: customer,
      }),
      transformResponse: (response: Customer | ErrorResponse) => {
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
    updateCustomer: builder.mutation<Customer, Partial<Customer> & { id: number }>({
      query: ({ id, ...updates }) => ({
        url: `/customer/api/customers/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: updates,
      }),
      transformResponse: (response: Customer | ErrorResponse) => {
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
    deleteCustomer: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/customer/api/customers/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
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
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
