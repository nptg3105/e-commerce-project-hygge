import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const useProductDetail = ({ productId }) => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const result = async ({ productId }) => {
			try {
				const { productId } = await productsAPI.getproductDetailApi(productId)

				setLoading(false)
			} catch (err) {
				console.log('Failed to fetch product lists: ', err)
			}
		}
		setProduct(result)
		setLoading(false)
	}, [productId])

	return { product, loading }
}

export default useProductDetail
