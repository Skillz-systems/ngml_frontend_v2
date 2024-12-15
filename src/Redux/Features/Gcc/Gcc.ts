import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { api } from '../../api';
import { SerializedError } from '@reduxjs/toolkit';

export interface LineItemType {
  sn: number;
  id: number;
  customer_id: number;
  customer_site_id: number;
  volume: number;
  inlet_pressure: number;
  outlet_pressure: number;
  status: number;
  created_at: string;
  original_date: number;
  other: string;
  outlet: number;
  inlet: number;
}


export interface ApiResponse {
  status: string;
  data: {
    data: any;
    list_item: LineItemType[];
    gcc: any | null;
    invoice_advice: any | null;
    invoice: any | null;
    status?: string;
  } | null;
  error?: FetchBaseQueryError | { status: string; error: string } | SerializedError;
}


type GCCCreate = {
  customer_id: number;
  customer_site_id: number;
  list_item: string;
};

type GCCInit = {
  customer_id: number;
  customer_site_id: number;
};

export const gccApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createGCC: builder.mutation<{ success: boolean }, GCCCreate>({
      query: (gccData) => ({
        url: 'billing/api/gcc/create',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: gccData,
      }),
    }),
    initGCC: builder.mutation<ApiResponse, GCCInit>({
      query: (gccData) => ({
        url: 'billing/api/gcc-init',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: gccData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateGCCMutation,
  useInitGCCMutation,
} = gccApi;
