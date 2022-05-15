import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: () => axiosClient.get('product')
}

export default productsAPI
