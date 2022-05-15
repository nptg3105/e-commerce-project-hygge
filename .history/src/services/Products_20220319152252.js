const { default: axiosClient } = require('apis/axiosClient')

const productsAPI = {
	getProducts: async url => {
		const data = await axiosClient.get(url)
		return data
	}
}

export default productsAPI
