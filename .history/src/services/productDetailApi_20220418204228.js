import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: ({ productId }) => axiosClient.get(`products/productId`)
}

export default productDetailApi

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc

// https://kmin-ecommerce-be.herokuapp.com/review/random
