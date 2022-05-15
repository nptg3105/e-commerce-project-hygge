/* eslint-disable */
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = ({ productDetail }) => {
	const { productId } = useParams()
	const { product, loading } = useProductDetail(productId)
	console.log(product)

	return (
		<>
			<Header />
			<p>{productDetail.name}</p>
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
