/* eslint-disable */
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	const { productId } = useParams()
	const { product } = useProductDetail(productId)
	console.log(product)
	return (
		<>
			<Header />
			<ProductInfo product={product} message={message} />
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
