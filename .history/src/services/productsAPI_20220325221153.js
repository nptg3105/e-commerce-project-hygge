import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: async () => {
		const response = await axiosClient.get('product')
		const data = response.products
		return data
	}
}

export default productsAPI
