import { useEffect, useState } from 'react'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {}, [productId])

	return { product, loading }
}
