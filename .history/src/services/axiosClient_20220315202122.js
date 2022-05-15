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
	res => res.data,
	err => {
		console.log(err.response)
		// return 'Co loi'
		return Promise.reject(err)
	}
)

export default axiosClient
