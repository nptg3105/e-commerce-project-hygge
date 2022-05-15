import axiosClient from 'apis/axiosClient'

const productsAPI = {
	getProducts: filters => {
		console.log(filters)
		return axiosClient.get('product')
	}
}

export default productsAPI

// product?categories=Đồ chơi trẻ em&categories=Mỹ phẩm&sortByPrice=asc
