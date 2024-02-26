import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [], // array containing product ids
    showWishlistedOnly: false
  },
  reducers: {
    addWishListItem: (state, action) => {
      state.products.push(action.payload)
    },
    removeWishListItem: (state, action) => {
      state.products.splice(action.payload, 1)
    },
    toggleWishlisted: (state, action) => {
      state.showWishlistedOnly = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeWishListItem, addWishListItem, toggleWishlisted } = wishlistSlice.actions

export default wishlistSlice.reducer