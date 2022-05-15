import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import authReducer from 'redux/reducers/auth'
import i18nReducer from 'redux/reducers/i18n'
import cartReducer from '../components/Cart/CartSlice'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk]

const rootReducer = combineReducers({
	auth: authReducer,
	i18n: i18nReducer,
	cart: cartReducer
})

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)

export const persistor = persistStore(store)
export default store
