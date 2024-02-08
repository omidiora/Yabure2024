// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../../utils/axios/axiosBaseQuery'
import { BASE_URL } from '../../../API'

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getAllBooks: builder.query<any, void>({
      query: () => '/v1/books',
    }),
    getPopularUploader: builder.query<any, void>({
      query: () => '/v1/user/popular',
    }),

    getAllSuggestedNote: builder.query<any, void>({
      query: () => '/v1/books/suggested',
    }),
   
   
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery ,useGetPopularUploaderQuery ,useGetAllSuggestedNoteQuery} = dashboardApi

