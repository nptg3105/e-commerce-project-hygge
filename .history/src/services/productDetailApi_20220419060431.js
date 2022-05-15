import axiosClient from 'apis/axiosClient'

const productDetailApi = {
	getproductDetailApi: async productId => {
		console.log(productId)
		await axiosClient.get(`/product/${productId}`)
	}
}

export default productDetailApi
