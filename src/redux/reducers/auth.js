import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AuthActions } from 'redux/actions/auth'

const initialValue = {
	isLogin: false,
	user: null
}

const authReducer = (state = initialValue, action = {}) => {
	switch (action.type) {
		case AuthActions.Login: {
			const newState = { ...state }
			newState.isLogin = true
			newState.user = action.payload
			return newState
		}

		case AuthActions.Logout: {
			const newState = { ...state }
			newState.isLogin = false
			newState.user = null
			return newState
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
