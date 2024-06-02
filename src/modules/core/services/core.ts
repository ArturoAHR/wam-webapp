import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: () => ({}),
});
