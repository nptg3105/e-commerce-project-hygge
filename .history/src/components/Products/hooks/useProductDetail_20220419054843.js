import { useEffect, useState } from 'react'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				const result = productDetailApi.getproductDetailApi(productId)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}
		})()
	}, [productId])

	return { product, loading }
}

export default useProductDetail
