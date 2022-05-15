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
	const { productDetail } = useProductDetail(productId)
	console.log(productDetail)
	return (
		<>
			<Header />
			<ProductInfo productDetail={productDetail} />
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
