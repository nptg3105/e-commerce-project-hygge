import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const result = await productDetailApi.getproductDetailApi(productId)
				console.log(productId)
				setProduct(result)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}

			setLoading(false)
		})()
	}, [productId])

	return { product, loading }
}

export default useProductDetail
