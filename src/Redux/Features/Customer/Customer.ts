import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

interface Customer {
  id: number;
  task_id: number;
  company_name: string;
  email: string;
  phone_number: string;
  created_by_user_id: number;
  status: boolean;
  created_at: string;
  updated_at: string;
}

type ErrorResponse = {
  error: string;
};

export const customersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => '/customers',
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
        return errorResponse;
      },
    }),
    addCustomer: builder.mutation<Customer, Omit<Customer, 'id'>>({
      query: (customer) => ({
        url: '/customers',
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
        url: `/customers/${id}`,
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
        url: `/customers/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
      transformResponse: (response: { success: boolean; id: number } | ErrorResponse) => {
        if ('error' in response) {
          throw new Error(response.error);
        }
        // Ensure both 'success' and 'id' are returned
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
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
