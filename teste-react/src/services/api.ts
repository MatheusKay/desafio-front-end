import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Func = {
  id: number
  name: string
  job: string
  admission_date: string
  phone: string
  image: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/'
  }),
  endpoints: (builder) => ({
    getFuncionarios: builder.query<Func[], void>({
      query: () => 'employees'
    })
  })
})

export const { useGetFuncionariosQuery } = api

export default api
