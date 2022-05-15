import { createSelector } from '@reduxjs/toolkit'

const cartItemsSelector = state => state.cart.cartItems

// Count number of products in cart

const cartitemsCountSelector = createSelector(cartItemsSelector, cartItems =>
	cartItems.reduce((count, item) => count + item.quantity, 0)
)
