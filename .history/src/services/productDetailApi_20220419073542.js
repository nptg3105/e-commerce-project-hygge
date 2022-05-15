import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: productId => {
		console.log(productId)
		const url = `/product/${productId}`
		axiosClient.get(yrl)
	}
}

export default productDetailApi
