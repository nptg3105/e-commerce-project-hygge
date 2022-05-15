import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: () => {
		axiosClient.get(`product/${queryString.stringify(productId)}`)
	}
}

export default productDetailApi

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
