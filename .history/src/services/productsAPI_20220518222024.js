import queryString from 'query-string'
import axiosClient from '../apis/axiosClient'

const productsAPI = {
	getProducts: filters => axiosClient.get(`product?${queryString.stringify(filters)}`)
}

export default productsAPI

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
