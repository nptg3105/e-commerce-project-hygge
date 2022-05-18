import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import { I18nActions } from 'redux/actions/i18n'

const initialValue = {
	language: {
		flag: 'GB',
		label: 'English',
		locale: 'en',
		currency: 'USD'
	}
}

const i18nReducer = (state = initialValue, action = {}) => {
	switch (action.type) {
		case I18nActions.ChangeLanguage: {
			const newState = { ...state }
			newState.language = action.payload
			return newState
		}

		default: {
			return state
		}
	}
}

const persistConfig = {
	keyPrefix: 'ecommerce-',
	key: 'i18n',
	storage
}

export default persistReducer(persistConfig, i18nReducer)
