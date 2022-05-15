import axiosClient from 'apis/axiosClient'

const newestProductsAPI = {
	getNewestProducts: () => axiosClient.get('/product/newest')
}

export default newestProductsAPI

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
