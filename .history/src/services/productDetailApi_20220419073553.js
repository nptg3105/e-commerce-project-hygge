import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: productId => {
		console.log(productId)
		const url = `/product/${productId}`
		return axiosClient.get(url)
	}
}

export default productDetailApi
