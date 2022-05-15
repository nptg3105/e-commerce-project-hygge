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
		}
	}
})
