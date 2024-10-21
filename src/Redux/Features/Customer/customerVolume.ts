import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';

interface Volume {
    date: string;
    volume: number;
}


interface GetAllCustomersVolumeResponse {
    data: Array<{
        customerId: string;
        dailyVolumes: Volume[];
    }>;
}

interface GetCustomerVolumeResponse {
    customerId: string;
    dailyVolumes: Volume[];
}

interface ErrorResponse {
    message: string;
}




export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomersDailyVolume: builder.query<GetAllCustomersVolumeResponse, Record<string, string>>({
            query: (params: Record<string, string >) => `/gas/api/daily-volumes?${new URLSearchParams(params).toString()}`,
            providesTags: ['Customers'],

            transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
                const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
                return errorResponse;
            },
        }),

        getCustomersDailyVolumeById: builder.query<GetCustomerVolumeResponse, number>({
            query: (customerId) => `/gas/api/daily-volumes?customerId=${customerId}`,
            providesTags: ['Customers'],

            transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
                const errorResponse: ErrorResponse = baseQueryReturnValue.data as ErrorResponse;
                return errorResponse;
            },
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAllCustomersDailyVolumeQuery,
    useGetCustomersDailyVolumeByIdQuery,
} = customersApi;
