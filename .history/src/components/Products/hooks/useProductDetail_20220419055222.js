/* eslint-disable */
import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				const { productId } = await productDetailApi.getproductDetailApi(productId)
				console.log(productId)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}
		})()
	}, [productId])

	return { product, loading }
}

export default useProductDetail
