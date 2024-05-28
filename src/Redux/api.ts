
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.ngml.skillzserver.com' }),
  endpoints: () => ({}),
})