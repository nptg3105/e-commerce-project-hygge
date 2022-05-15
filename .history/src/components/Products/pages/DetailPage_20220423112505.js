/* eslint-disable */
import withLayout from 'components/withLayout'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	const { productId } = useParams()
	const { product } = useProductDetail(productId)

	const handleAddToCartSubmit = formValues => {
		console.log('Form submit', formValues)
	}

	return (
		<>
			<ProductInfo productDetail={product} />
			{/* <AddToCartForm onSubmit={handleAddToCartSubmit} /> */}
		</>
	)
}

DetailPage.propTypes = {}

export default withLayout(DetailPage)
