import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: filters => {
		console.log(filters)
		return axiosClient.get('product')
	}
}

export default productsAPI
