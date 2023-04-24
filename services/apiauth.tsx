import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiauth = createApi({
  reducerPath: 'apiauth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://:8000/api/user/' }),
  endpoints: (builder:any) => ({
    loginUser: builder.mutation({
        query: (user:any) => {
          return {
            url: 'login/',
            method: 'POST',
            body: user,
            headers: {
              'Content-type': 'application/json',
            }
          }
        }
      }),
      // getLoggedUser: builder.query({
      //   query: (token:any) => {
      //     return {
      //       url: 'profile/',
      //       method: 'GET',
      //       headers: {
      //         'authorization': `Bearer ${token}`,
      //       }
      //     }
      //   }
      // }),
    }),
})

export const { useLoginUserMutation } = apiauth