import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: productId => {
		console.log(productId)
		const url = `/product/${productId}`
		axiosClient.get(url)
	}
}

export default productDetailApi
