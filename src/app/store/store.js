import { configureStore } from '@reduxjs/toolkit'
import { autocompleteApi } from './reducers/product/reducers'

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [autocompleteApi.reducerPath]: autocompleteApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(autocompleteApi.middleware),
})