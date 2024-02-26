import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './reducers/product/reducers.ts'
import wishlistReducer from './reducers/wishlist/reducers.js'

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
    wishlist: wishlistReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})