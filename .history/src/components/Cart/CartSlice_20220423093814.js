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

		addToCart(state, action) {},

		setQuantity(state, action) {},

		removeFromCart(state, action) {
			const idNeedToRemove = action.payload
			state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRemove)
		}
	}
})

const { actions, reducer } = cartSlice

export const { showMiniCart, hideMiniCart } = actions
export default reducer
