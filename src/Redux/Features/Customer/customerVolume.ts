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






export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAllCustomersDailyVolume: builder.query<GetAllCustomersVolumeResponse, Record<string, string>>({
            query: (params: Record<string, string>) => ({
                url: `/gas/api/daily-volumes`,
                method: 'POST',
                body: params,
            }),
            providesTags: ['Customers'],
           
        }),

        getCustomersDailyVolumeById: builder.query<GetCustomerVolumeResponse, number>({
            query: (customerId) => `/gas/api/daily-volumes?customerId=${customerId}`,
            providesTags: ['Customers'],

        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAllCustomersDailyVolumeQuery,
    useGetCustomersDailyVolumeByIdQuery,
} = customersApi;
