import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  price: string,
  shippingMethod: string,
}

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://honey-badgers-ecommerce.glitch.me/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => `products`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi