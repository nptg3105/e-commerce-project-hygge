import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const useProductDetail = ({ productId }) => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const result = async productId => {
			try {
				const { productId } = await productsAPI.getproductDetailApi(productId)
				setProduct(result)
				setLoading(false)
			} catch (err) {
				console.log('Failed to fetch product lists: ', err)
			}
		}
		setLoading(false)
	}, [productId])

	return { product, loading }
}

export default useProductDetail
