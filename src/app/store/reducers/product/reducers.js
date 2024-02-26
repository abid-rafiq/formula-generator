import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const autocompleteApi = createApi({
  reducerPath: 'autocompleteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://652f91320b8d8ddac0b2b62b.mockapi.io/' }),
  endpoints: (builder) => ({
    autocompleteSuggestions: builder.query({
      query: () => `autocomplete`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAutocompleteSuggestionsQuery } = autocompleteApi