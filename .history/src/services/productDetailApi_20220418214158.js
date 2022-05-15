import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: productId => {
		axiosClient.get(`product/${productId}`)
	}
}

export default productDetailApi
