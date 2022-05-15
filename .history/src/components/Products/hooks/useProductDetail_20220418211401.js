import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = ({ productId }) => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getProductDetail = async () => {
			try {
				setLoading(true)
				const { result } = await productDetailApi.getproductDetailApi(productId)
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
