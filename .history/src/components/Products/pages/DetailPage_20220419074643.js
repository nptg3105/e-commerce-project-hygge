/* eslint-disable */
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	// const [reviewList, setReviewList] = useState([])
	// const [active, setActive] = useState(0)
	const { productId } = useParams()
	const { product, loading } = useProductDetail(productId)
	console.log(product)

	return (
		<>
			<Header />
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
