import axiosClient from 'apis/axiosClient'
import queryString from 'query-string'

const productsAPI = {
	getProducts: filters => axiosClient.get(`product?${queryString.stringify(filters)}`)
}

export default productsAPI
