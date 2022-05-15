/* eslint-disable */
import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	if (productId) {
		useEffect(() => {
			try {
				const result = productDetailApi.getproductDetailApi(productId)
				console.log(result)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}
		}, [productId])
	}
}

export default useProductDetail
