import { api } from '../../api';

export const ddqService = api.injectEndpoints({
    endpoints: (builder) => ({
        getDdqDetails: builder.query({
            query: (customerId) => `/ddq/details/${customerId}`,
            // providesTags: ['DdqDetails'],
        }),
        uploadDdq: builder.mutation({
            query: ({ customerId, file }) => ({
                url: `/ddq/upload/${customerId}`,
                method: 'POST',
                body: { file },
            }),
            // invalidatesTags: ['DdqDetails'],
        }),
    }),
});

export const { useGetDdqDetailsQuery, useUploadDdqMutation } = ddqService;
