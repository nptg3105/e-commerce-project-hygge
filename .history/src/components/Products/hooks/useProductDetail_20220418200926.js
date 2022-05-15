import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const result = await productsAPI.getProducts(productId)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}

			setLoading(false)
		})()
	}, [productId])

	return { product, loading }
}
