import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		showMiniCart: false,
		cartItems: []
	},
	reducers: {
		showMiniCart(state) {
			state.showMiniCart = true
		},

		hideMiniCart(state) {
			state.showMiniCart = false
		},

		addToCart(state, action) {
			const newItems = action.payload
			const index = state.cartItems.findIndex(x => x.id === newItems.id)
			if (index >= 0) {
				// increase quantity
				state.cartItems[index].quantity += newItems.quantity
			} else {
				// add to cart
				state.cartItems.push(newItems)
			}
		},

		setQuantity(state, action) {
			console.log('setQuantity')
			const { id, quantity } = action.payload
			// check if product is available in cart

			const index = state.cartItems.findIndex(x => x.id === id)
			if (index >= 0 && quantity > 0) {
				state.cartItems[index].quantity = quantity
			}
		},

		removeFromCart(state, action) {
			const idNeedToRemove = action.payload
			state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRemove)
		}
	}
})

const { actions, reducer } = cartSlice

export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions
export default reducer
