/* eslint-disable */
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	const { productId } = useParams()
	const { product } = useProductDetail(productId)

	return (
		<>
			<ProductInfo productDetail={product} />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
