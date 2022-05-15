/* eslint-disable */
import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [productDetail, setProductDetail] = useState({})
	const [loading, setLoading] = useState(false)

	if (productId) {
		useEffect(() => {
			const getProductDetaik = async productId => {
				try {
					const result = await productDetailApi.getproductDetailApi(productId)
				} catch (err) {
					console.log('Fail to fetch data', err)
				}
			}
			return { productDetail, loading }
		}, [productId])
	}
}

export default useProductDetail
