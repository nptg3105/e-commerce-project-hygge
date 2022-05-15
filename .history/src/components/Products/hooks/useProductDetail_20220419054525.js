import { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getProductDetail = async productId => {
			try {
				const result = await productDetailApi.getproductDetailApi(productId)
				setProduct(result)
				console.log(productId)
				setLoading(false)
			} catch (err) {
				console.log('Fail to fetch data', err)
			}
		}
		getProductDetail(productId)
	}, [productId])

	return { product, loading }
}

export default useProductDetail
