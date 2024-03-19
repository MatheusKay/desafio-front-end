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

export const formataNumero = (numero: string) => {
  const match = numero.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)

  console.log(match)

  if (match) {
    return '+ ' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4]
  }

  return numero
}
