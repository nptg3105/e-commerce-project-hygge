/* eslint-disable */
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productDetailApi from 'services/productDetailApi'
import ProductInfo from '../components/ProductInfo'
import '../Product.scss'

const DetailPage = () => {
	const { productId } = useParams()
	// const { product } = useProductDetail(productId)

	const [productDetail, setProductDetail] = useState([])

	if (productId) {
		useEffect(() => {
			const getProductDetail = async productId => {
				try {
					const result = await productDetailApi.getproductDetailApi(productId)
					setProductDetail(result)
					console.log(result)
				} catch (err) {
					console.log('Fail to fetch data', err)
				}
			}
			getProductDetail(productId)
		}, [productId])
	}

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
