import axiosClient from 'apis/axiosClient'
import queryString from 'query-string'

const newestProductsAPI = {
	getNewestProducts: filters => axiosClient.get(`product?${queryString.stringify(filters)}`)
}

export default newestProductsAPI

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
