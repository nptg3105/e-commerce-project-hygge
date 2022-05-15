import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const useProductDetail = ({ productId }) => {
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getProductDetail = async productId => {
			try {
				setLoading(false)
				const { result } = await productsAPI.getProducts(productId)
				setProduct(result)
				console.log(result)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}

			setLoading(false)
		}
		getProductDetail(productId)
	}, [productId])

	return { product, loading }
}

export default useProductDetail
