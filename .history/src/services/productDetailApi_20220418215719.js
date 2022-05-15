import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: productId => {
		console.log(productId)
		axiosClient.get(`product/${productId}`)
	}
}

export default productDetailApi
