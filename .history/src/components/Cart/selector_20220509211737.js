import { createSelector } from '@reduxjs/toolkit'

const cartItemsSelector = state => state.cart.cartItems

// Count number of products in cart

export const cartItemsCountSelector = createSelector(cartItemsSelector, cartItems =>
	cartItems.reduce((count, item) => count + item.quantity, 0)
)

// Caculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector, cartItems =>
	cartItems.reduce((total, item) => total + item.product.product.price.actual * item.quantity, 0)
)

//

export const quantityByIdSelector = id =>
	createSelector(cartItemsSelector, cartItems => cartItems.find(cartItem => cartItem.id === id)).quantity
