import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts =() => {
		const response =  axiosClient.get('product')
		const data = response.products
		return data
	}
}

export default productsAPI
