import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: async url => {
		const data = await axiosClient.get(url)
		return data.products
	}
}

export default productsAPI
