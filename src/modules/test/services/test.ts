import { coreApi } from "@modules/core";

const testService = coreApi
  .enhanceEndpoints({
    addTagTypes: ["test"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      testApiConnectivity: builder.query<unknown, void>({
        query: () => ({
          url: "/test/",
          method: "GET",
        }),
        providesTags: ["test"],
      }),
    }),
  });

export const { useTestApiConnectivityQuery } = testService;
