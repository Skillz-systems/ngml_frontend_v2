/* eslint-disable @typescript-eslint/no-explicit-any */
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

// interface GetCustomerVolumeResponse {
//     customerId: string;
//     dailyVolumes: Volume[];
// }




// interface DailyVolumeResponse {
//   data: Array<{
//     id: number;
//     customer_id: number;
//     customer_site_id: number;
//     volume: number;
//     created_at: string;
//     updated_at: string;
//     abnormal_status: string;
//   }>;
//   status:string;
// }

export interface Filters {
    page: string;
    per_page: string;
    customer_id: string | null;
    customer_site_id: string | null;
    created_at_from: string | null;
    created_at_to: string | null;
    status: string | null;
    updated_at_from?: string | null;
    updated_at_to?: string | null;
}


export const customersApi = api.injectEndpoints({
    endpoints: (builder) => ({

        getAllCustomersDailyVolume: builder.query<GetAllCustomersVolumeResponse, Filters>({
            query: (params) => ({
                url: '/gas/api/daily-volumes',
                method: 'POST',
                body: params,
            }),
            providesTags: ['DailyVolumes'],

        }),
        getCustomersDailyVolumeById: builder.query<any, number>({
            query: (customerId) => `/gas/api/daily-volumes/view/${customerId}`,
            providesTags: ['DailyVolumes'],
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAllCustomersDailyVolumeQuery,
    useGetCustomersDailyVolumeByIdQuery,
} = customersApi;
