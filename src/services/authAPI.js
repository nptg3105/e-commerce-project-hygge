import axiosClient from './axiosClientt'

const authAPI = {
	login: data => {
		const url = 'auth/login'
		return axiosClient.post(url, data)
	},

	logout: () => {
		const url = 'auth/logout'
		return axiosClient.patch(url)
	},

	register: data => {
		const url = 'auth/register'
		return axiosClient.post(url, data)
	}
}

export default authAPI
