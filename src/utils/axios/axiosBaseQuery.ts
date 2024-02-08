import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../API';

interface CustomFetchBaseQueryArgs {
  withCredentials?: boolean;
}

export const axiosBaseQuery: BaseQueryFn<string | Error, unknown, CustomFetchBaseQueryArgs> = fetchBaseQuery({
  baseUrl: BASE_URL,

});
