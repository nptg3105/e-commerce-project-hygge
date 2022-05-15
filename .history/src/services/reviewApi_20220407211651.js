import axiosClient from 'apis/axiosClient'

const reviewAPI = {
	getReviewAPI: async () => axiosClient.get('review/random')
}

export default reviewAPI

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
