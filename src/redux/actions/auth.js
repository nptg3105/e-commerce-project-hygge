import authAPI from 'apis/authAPI'
import { destroyToken, storeToken } from 'utils/token'

export const AuthActions = {
	Login: 'Auth/Login',
	Logout: 'Auth/Logout'
}

export const login = user => ({
	type: AuthActions.Login,
	payload: user
})

export const loginAsync = data => async dispatch => {
	try {
		const { user, token, refreshToken } = await authAPI.login(data)
		dispatch(login(user))
		storeToken({ token, refreshToken })
	} catch (err) {
		console.log(err)
	}
}

export const logout = () => ({
	type: AuthActions.Logout
})

export const logoutAsync = () => async dispatch => {
	try {
		await authAPI.logout()
		dispatch(logout())
		destroyToken()
	} catch (err) {
		console.log(err)
	}
}
