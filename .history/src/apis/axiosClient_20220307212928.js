import axios from 'axios'

const axiosOptions = {
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
}

const axiosClient = axios.create(axiosOptions)

axiosClient.interceptors.request.use(
	req => req,
	err => Promise.reject(err)
)

axiosClient.interceptors.response.use(
	response => response.data,
	error => {
		console.log('Error Response', error.response)
		const { config, status, data } = error.response
		if (config.url === 'auth/local/register' && status === 400) {
			const errorList = data.data || []
			const firstError = errorList.length > 0 ? errorList[0] : {}
			const messageList = firstError.meassage || []
			const firstMessage = messageList.length > 0 ? messageList[0] : {}

			throw new Error(firstMessage.meassage)
		}
		return Promise.reject(error)
	}
)

export default axiosClient
