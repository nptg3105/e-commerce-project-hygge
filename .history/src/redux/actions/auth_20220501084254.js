import authAPI from 'services/authAPI'
import { storeToken } from 'utils/token'

export const AuthActions = {
	Register: 'Auth/Register',
	Login: 'Auth/Login',
	Logout: 'Auth/Logout',
	DangLogin: 'Auth/DangLogin',
	LoginMessage: 'Auth/LoginMessage',
	IncreaseQuantity: 'Auth/IncreaseQuantity',
	DecreaseQuantity: 'Auth/DecreaseQuantity'
}

export const increaseQuantity = (value) => {
	type: AuthActions.IncreaseQuantity,
	payload: value
}

export const register = user => ({
	type: AuthActions.Register,
	payload: user
})

export const login = () => ({
	type: AuthActions.Login,
	payload: null
})
export const logout = () => ({
	type: AuthActions.Logout,
	payload: null
})

export const dangLogin = () => ({
	type: AuthActions.DangLogin,
	payload: null
})

export const loginMessage = message => ({
	type: AuthActions.LoginMessage,
	payload: message
})

export const registerAsync = data => async dispatch => {
	const { user } = await authAPI.register(data)

	dispatch(register(user))
}

export const loginAsync = data => async dispatch => {
	try {
		dispatch(dangLogin())
		const { user, token, refreshToken, message } = await authAPI.login(data)
		dispatch(login(user))
		storeToken({ token, refreshToken })
		throw new Error(JSON.stringify({ status: 'success', message }))
	} catch (err) {
		let temp
		try {
			console.log(1)
			console.log(err.message)
			temp = JSON.parse(err.message)
			console.log(temp)
		} catch {
			temp = {}
		}
		if (temp.status) {
			throw new Error(JSON.stringify({ status: 'success', message: temp.message }))
		} else {
			throw new Error(JSON.stringify({ status: 'fail', message: err.message }))
		}
	}
}
