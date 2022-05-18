import React from 'react'
import { useParams } from 'react-router-dom'
import withLayout from '../../withLayout'
import ProductInfo from '../components/ProductInfo'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	const { productId } = useParams()
	const { product } = useProductDetail(productId)

	console.log(product)

	return <ProductInfo productDetail={product} />
}

DetailPage.propTypes = {}

export default withLayout(DetailPage)
