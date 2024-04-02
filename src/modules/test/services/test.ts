import { coreApi } from "@modules/core";

const testService = coreApi
  .enhanceEndpoints({
    addTagTypes: ["test"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      testApiConnectivity: builder.query({
        query: () => ({
          url: "/",
          method: "GET",
        }),
        providesTags: ["test"],
      }),
    }),
  });

export const { useTestApiConnectivityQuery } = testService;
