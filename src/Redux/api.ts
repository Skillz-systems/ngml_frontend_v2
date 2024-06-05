
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ngml.skillzserver.com' }),
  endpoints: () => ({}),
})
