import { api } from '../../api';

// Existing interfaces remain as they are for now
export interface CustomerData {
  id: number;
  task_id: string;
  company_name: string;
  email: string;
  phone_number: string;
  created_by_user_id: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface CustomerResponse {
  data: CustomerData[];
}

// export interface CustomerWithSite {
//   data: CustomerSite;
// }

// New DDQ interfaces (if different from existing Customer interfaces, modify accordingly)

// Replace or add the endpoints with DDQ-related queries and mutations
export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({
      getCustomersDDQ: builder.query<CustomerResponse, void>({
        query: () => '/customer/api/customer-ddq-existings',
        providesTags: ['DDQ'],
      }),
      getACustomerDDQById: builder.query<CustomerData, number>({
        query: (id) => `/customer/api/customer-ddq-existings/${id}`,
        providesTags: ['DDQ'],
      }),
      deleteCustomerDDQ: builder.mutation<{ success: boolean; id: number }, number>({
        query: (id) => ({
          url: `/customer/api/customer-ddq-existings/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['DDQ'],
      }),
    }),
    overrideExisting: false,
  })
  

export const {
  useGetCustomersDDQQuery,
  useGetACustomerDDQByIdQuery,
  useDeleteCustomerDDQMutation,
} = customersApi;