/* eslint-disable */
import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, serProduct] = useState({})
	const [loading, setLoading] = useState(false)

	if (productId) {
		useEffect(() => {
			const getProductDetaik = async productId => {
				try {
					const result = await productDetailApi.getproductDetailApi(productId)
					serProduct(result)
				} catch (err) {
					console.log('Fail to fetch data', err)
				}
			}
			return { productDetail, loading }
		}, [productId])
	}
}

export default useProductDetail
