import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: async url => {
		const response = await axiosClient.get(url)
		const data = response.products
		return data
	}
}

export default productsAPI
