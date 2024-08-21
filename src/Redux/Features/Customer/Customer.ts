import { api } from '../../api';

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const customersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => '/customers',
    }),
    addCustomer: builder.mutation<Customer, Omit<Customer, 'id'>>({
      query: (customer) => ({
        url: '/customers',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: customer,
      }),
    }),
    updateCustomer: builder.mutation<Customer, Partial<Customer> & { id: string }>({
      query: ({ id, ...updates }) => ({
        url: `/customers/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: updates,
      }),
    }),
    deleteCustomer: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/customers/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }),
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
