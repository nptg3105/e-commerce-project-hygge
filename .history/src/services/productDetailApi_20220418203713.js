import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getReviewAPI: () => axiosClient.get('product/:productId')
}

export default productDetailApi

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
