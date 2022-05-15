import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AuthActions } from 'redux/actions/auth'

const initialValue = {
	isLogin: false,
	user: null,
	waitingLogin: false,
	loginMessage: {
		status: 'none',
		message: ''
	},
	quantity: 1
}

const authReducer = (state = initialValue, action = {}) => {
	switch (action.type) {
		case AuthActions.Register: {
			const newState = { ...state }
			newState.isLogin = true
			newState.user = action.payload
			return newState
		}
		case AuthActions.Login: {
			const newState = { ...state }
			newState.isLogin = true
			newState.user = action.payload
			newState.waitingLogin = false
			return newState
		}
		case AuthActions.Logout: {
			const newState = {}
			newState.isLogin = false
			newState.user = null
			return newState
		}
		case AuthActions.DangLogin: {
			const newState = { ...state }
			newState.waitingLogin = true
			return newState
		}
		case AuthActions.LoginMessage: {
			const newState = { ...state }
			newState.loginMessage = action.payload
			return newState
		}

		case AuthActions.IncreaseQuantity: {
			const newState = { ...state }
			newState.quantity += 1
			return newState
		}

		case AuthActions.DecreaseQuantity: {
			if (quantity > 0) {
				const newState = { ...state }
				newState.quantity -= 1
				return newState
			}
		}

		default: {
			return state
		}
	}
}

const persistConfig = {
	keyPrefix: 'ecommerce-',
	key: 'auth',
	storage
}

export default persistReducer(persistConfig, authReducer)
